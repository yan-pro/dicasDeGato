import React from 'react'
import styled from 'styled-components'

function Page() {
    return (
        <Container>
           <Header>
            <H1>DICA MAIS IMPORTANTE</H1>
            <H3>PRIMEIRA E MAIS IMPORTANTE DICA: SE VOCÊ NÃO TEM UM GATO, ADOTE UM :)</H3>
             
               </Header> 
        </Container>
    )
}

export default Page


const Container = styled.div`
border-left: 2px solid  white;
border-right: 2px solid  white;
border-bottom: 2px solid  white;
border-top: 2px solid  white;

padding: 20px;
background: linear-gradient(gray, pink);
color: whitesmoke;
margin-right: 20px;
margin-left: 20px;
height: 300px;
margin-bottom: 20px;
margin-top: 95px;

`;

const Header = styled.div`

`;

const H1 = styled.h1`
font-size: 20;
:hover {
font-size: 40px;
transition: all 0.5s ease 0s  ;
    color: blueviolet;
}
`;

const H3 = styled.h3`

margin-left: 250px;
:hover {

font-size: 20px;
transition: all 0.5s ease 0s  ;
    color: red;
}
`
