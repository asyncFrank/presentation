import { Link } from 'react-router-dom';
import { Button, ButtonBox, Container, Image, LeftContainer, RightContainer, SubTitle, Title } from './styles';
import { BiMap } from 'react-icons/bi';
import {AiOutlineLineChart} from 'react-icons/ai';
import {SiMatrix} from 'react-icons/si';
import {FcProcess} from 'react-icons/fc'


export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>Mapas, gráficos e apresentações</Title>
        {/* <SubTitle>Encontre as informações que precisa</SubTitle> */}
        {/* <Link to="https://map-wout-distance-nlumsm0bc-asyncfrank.vercel.app/"> */}
        <a href="https://map-wout-distance-nlumsm0bc-asyncfrank.vercel.app/">
          <Button>
            <ButtonBox><BiMap /></ButtonBox>
            Mapa cidades com: Cama de Frango/Rochas de Fósfor/Misturadores de Adubos          </Button></a>

        <Link to="/grafico">
          <Button>
            <ButtonBox><AiOutlineLineChart /></ButtonBox>
            Gráfico</Button>
        </Link>
        <Link to="/matriz">
          <Button>
            <ButtonBox><SiMatrix /></ButtonBox>
            Matriz Swot</Button>
        </Link>
        <Link to="/processos">
          <Button>
            <ButtonBox><FcProcess /></ButtonBox>
            Processos</Button>
        </Link>
      </LeftContainer>
      <RightContainer><Image /></RightContainer>
    </Container>
  )
}