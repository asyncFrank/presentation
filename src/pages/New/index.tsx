import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { Marker, TileLayer } from 'react-leaflet';
import Input from '../../components/Input';
import icon from "../../constants";
import {
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    MapContainer,
    Section
} from './styles';

import { categories } from './categories';

import useGetLocation from '../../hooks/useGetLocation';
export default function New() {
    
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        city: '',
        state: '',
        phone: '',
        category: '',
        coords:[0,0],
    })

    const { coords } = useGetLocation();
    // console.log(formValues);
    if(!coords){
        return <h1>Obetendo localização...</h1>
    }
    
    return (
        <Container>
            <Form>
            <FormTitle>
                Cadastro do contato no mapa
            </FormTitle>
            <Section>
                Dados
            </Section>
            <Input label='Nome' name='name' value={formValues.name} onChange={setFormValues} />
            <Input label='Descrição' name='description' value={formValues.description} onChange={setFormValues} />
            <Input label='Cidade' name='city' value={formValues.city} onChange={setFormValues} />
            <Input label='UF' name='state' value={formValues.state} onChange={setFormValues} />
            <Input label='Categoria' name='category' value={formValues.category} onChange={setFormValues} />

            <Section>Endereço</Section>
            <MapContainer center={{
                lat: coords[0],
                lng: coords[1],
            } as LatLngExpression} zoom={13} scrollWheelZoom={false}   >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[formValues.coords[0],formValues.coords[1]] as LatLngExpression} icon={icon} />
            </MapContainer>
        </Form>
            <Section>Categoria</Section>

            <CategoryContainer >

                {categories.map(category =>
                (<CategoryBox key={category.key} onClick={() => {
                    setFormValues(prev => ({ ...prev, category: category.key }))
                }} isActive={formValues.category === category.key} >
                    <CategoryImage src={category.url} />
                    {category.label}
                </CategoryBox>))}

            </CategoryContainer>
            <ButtonContainer>
                <Button type='submit'>Salvar</Button>
            </ButtonContainer>
        </Container>
    )
}
