import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;
const Logo = styled.img`
height: 30px;

`;
const List = styled.ul`
    display: flex;
    gap:20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor:pointer;
`;
const Iconos = styled.div``;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: aqua;
    color: beige;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const NavBar = () => {
  return (
    <Section>
        <Container>
        <Links>
                <Logo src="./src/assets/img/logo.svg"/> 
            <List>
                <ListItem>Prueba1</ListItem>
                <ListItem>Prueba2</ListItem>
                <ListItem>Prueba3</ListItem>
            </List>
        </Links>
            <Iconos>
                <Button>log in</Button>
            </Iconos>
        </Container>
    </Section>
  )
}

export default NavBar