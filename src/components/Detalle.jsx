import styled from 'styled-components'
import NavBar from './NavBar';

const Section =styled.div`
height: 100vh;
scroll-snap-align:center;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Container =styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Izquierda =styled.div``;
const Derecha =styled.div``;
const Titulo =styled.h1``;
const Hacemos =styled.div``;
const Subtitulo =styled.h2``;
const Linea =styled.img``;
const Des =styled.p``;
const Img =styled.img``;

const Detalle = () => {
  return (
    <Section>
        <NavBar/>
        <Container>
          <Izquierda>
            <Titulo>Aqui va un titulo</Titulo>
            <Hacemos>
              <Linea src=""/>
              <Subtitulo>Prueba</Subtitulo>
            </Hacemos>
            <Des>este es un texto de prueba, hecho solo para visualización</Des>
          </Izquierda>  
          <Derecha>

          </Derecha>
        </Container>
    </Section>
  )
}

export default Detalle