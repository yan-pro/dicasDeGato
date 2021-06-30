import styled from "styled-components"

function Suport() {
    return (
        <Container>
            <H1>SUPORTE</H1>
            <H3>Bem vindo ao nosso suporte, caso veja algum erro e queira me avisar, ligue para mim(28 999519448), ou mande um email: yanvicentin851@gmail.com</H3>
        </Container>
    )
}

export default Suport

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
border-radius: 30px;
margin-top: 95px;
`;

const H1 = styled.h1`
transition: all 0.8s ease 0s;
:hover {
    color: blanchedalmond;
    font-size: 50px;
}
`;

const H3 = styled.h3``
