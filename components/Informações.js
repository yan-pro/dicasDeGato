import styled from "styled-components"

function Informações() {
    return (
        <Container>
            <H1>ME CONHEÇA MAIS</H1>
            <H3>Olá, meu nome é Yan, sou um programador inciante, tenho 13 anos, gosto bastante de gatos, sou de Venda Nova Do Imigrante(ES), e gosto bastante de CSS</H3>
        </Container>
    )
}

export default Informações

const Container = styled.div`
border-left: 2px solid  white;
border-right: 2px solid  white;
border-bottom: 2px solid  white;
border-top: 2px solid  white;
border-radius: 30px;

padding: 20px;
background: linear-gradient(gray, pink);
color: whitesmoke;
margin-right: 20px;
margin-left: 20px;
height: 300px;
margin-bottom: 20px;
margin-top: 95px;
`;

const H1 = styled.h1`
transition: all 0.8s ease 0s;
:hover{
color: pink;
font-size: 50px;
}
`

const H3 = styled.h3`
`
