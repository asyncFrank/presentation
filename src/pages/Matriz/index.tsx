import { Link } from 'react-router-dom';
import { Button, ButtonBox, Container, Image, LeftContainer, RightContainer, SubTitle, Title } from './styles';
import { BsFillPinFill } from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';
import { SiMatrix } from 'react-icons/si';
import { FcProcess } from 'react-icons/fc'


export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>Matriz Swot</Title>
        <Button>
          <ButtonBox><BsFillPinFill /></ButtonBox>
          Força</Button>
        <p>- Baixo custo produtivo;</p>
        <p>- Alta margem;</p>
        <p>- Fábrica perto das fontes de MP e dos clientes;</p>
        <p>- Tecnologias excluisivas associadas ao fertilizante.</p>

        <Button>
          <ButtonBox><BsFillPinFill /></ButtonBox>
          Oportunidades</Button>
        <p>- Biológicos, novas fronteiras do mercado;
        </p>
        <p>- Clientes procuram alternativa para altos preços dos fertilizantes;</p>
        <p>- Podemos ser a solução para os passivos da indústria brasileira de proteína animal;</p>
        <p>- Geração de crédito de carbono com o uso do fertilizante, pagando o seu custo;</p>
        <p>- ???? a empresa na lei do BEM.</p>

        <Button>
          <ButtonBox><BsFillPinFill /></ButtonBox>
          Fraquezas</Button>
        <p>- Necessidade de fornecedores para as principais matérias-primas.
        </p>
        <Button>
          <ButtonBox><BsFillPinFill /></ButtonBox>
          Ameaças</Button>
        <p>- Mercado possuir uma tecnologia igual à TCP, que viabilize um produto como o nosso.
        </p>

      </LeftContainer>
      <RightContainer></RightContainer>
    </Container>
  )
}