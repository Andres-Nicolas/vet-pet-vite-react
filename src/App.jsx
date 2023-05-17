import styled from "styled-components";
import Detalle from './components/Detalle';
import Contact from "./components/Contact";

const Container = styled.div`
height:100vh;
scrollbar-width:none;
scroll-snap-type:y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
color: #ffffff;
background:url("./src/assets/img/beemo.jpg");
&::-webkit-scrollbar{
  display:none ;
}
`;

function App() {

  return (
    <Container>
      <Detalle/>
      <Contact/>
    </Container>

  )
}

export default App
