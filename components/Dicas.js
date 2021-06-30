import styled from "styled-components"
import Image from "next/image"
import Deodora from "../public/img/Deodora.jpeg"



function Dicas() {
    return (
        <>
        <Container>
            <H1>PROTEJA SEUS GATINHOS</H1>
            <H3>Gatos são como crianças, muito curiosos, e para protegermos eles da curiosidade deles, temos que ter algumas proteçoẽs,no caso,a tela de proteção, antes de adotar um gatinho, coloque tela em todas as janelas, para eles não fugirem ou caírem,porque o gatinho não "sempre caí em pé".</H3>
            
        </Container>
        <Container3>
            <H3>fato divertido: Os gatos não saboreiam o doce</H3>
        </Container3>
        <FotoContainer>
            <Foto   src="https://i.imgur.com/b6EoKPH.jpg"></Foto>
            <H3>foto de Deodora(fêmea), idade: 4 anos</H3>
            </FotoContainer>
            
        <Container2>
            
            <H1>ALIMENTE SEUS BEBÊS</H1>

            <H3>Gatinhos são muito esfomeados, principalmente depois de castrados, por isso, nunca esqueça de encher os potinhos de ração 3 vezes por dia, tambêm não pode dar muita comida, pois senão ficarão obesos, que pode resultar em um ataque cardíaco.</H3>
            
        </Container2>
        <Container3>
            <H3>Fato divertido: As gatas tendem a ser destras, enquanto os gatos tendem a ser maioritariamente canhotos.</H3>
        </Container3>
        <Container>
            <H1>CASTRANDO</H1>
            <H3>Castrar os seus gatinhos é muito importante, principalmente se for fêmea, pois ela não vai entrar no período de CIO, quando os gatos são castrados, eles ficam mais carinhosos e calmos. Lembre-se sempre de fazer os procedimentos com um profissional!</H3>
        </Container>
        <Container2>
            <H1>SEJA CARINHOSO COM OS SEUS BEBÊS</H1>
            <H3>Os gatinhos são como crianças, muito carentes, ou seja, sempre guarde uns 15-20 minutos dedicados ao carinho :).</H3>
        </Container2>
        <FotoContainer>
            <Foto2   src="https://i.imgur.com/0NriZkN.jpg"></Foto2>
            <H3>foto de Teddy(macho), idade: 5 anos</H3>
            </FotoContainer>
            <Container2>
                <H1>ENSINANDO</H1>
                <H3>os gatos são um pouquinho mais complicados de treinarem, mas ainda sim é possível, tem vários tutoriais sobre como treinar seu gatinho no Youtube</H3>
            </Container2>
            <Container3>
            <H3>Fato divertido:Em média um gato passa 2/3 do dia dormindo. Isso significa que em 9 anos de vida, apenas está acordado 3 anos.</H3>
        </Container3>
        <Container>
            <H1>HIDRATE SEUS GATINHOS</H1>
            <H3>Assim como nós, os gatos sentem sede, é muito importante sempre deixar o potinho de água do seu pet cheio e com água fresca</H3>
        </Container>
        <Container2>
                <H1>BRINCANDO</H1>
                <H3>Gatos são como qualquer animal, cheio de energia, e brincar com eles é um ótimo jeito de gastar essas energias acumuladas, nos pet shops vendem bolinhas e vários outros brinquedinhos para você e seu pet terem muita diversão</H3>
            </Container2>
            <Fim>
                <H3>este website foi feito usando next.js.  </H3>
            <A href="https://nextjs.org/" >  saiba mais </A>
            </Fim> 
        </>
    )
}

export default Dicas

const Container = styled.div`
box-sizing: border-box;
border: 2px solid white;
width: 600px;
background: linear-gradient(gray, pink);
color: whitesmoke;
height: 250px;
margin-left: 20px;
margin-bottom: 30px;
padding: 20px;

`;
const Container2 = styled.div`
box-sizing: border-box;
border: 2px solid white;
width: 600px;
background: linear-gradient(gray, pink);
margin-top: 20px;
color: whitesmoke;
height: 250px;
margin-right: 20px;
margin-left: 850px;
margin-bottom: 30px;
padding: 20px;
`;

const H1 = styled.h1`
font-size: 20;
:hover{
    transition: all 0.8s ease 0s;
    color: blueviolet;
    font-size: 28;
}

`;

const H3 = styled.h3`
:hover{
    transition: all 0.5s ease 0s;
    color: blueviolet;
}
`;
const Container3 = styled.div`
box-sizing: border-box;
border: 2px solid white;
width: 240px;
background: linear-gradient(red, yellow);
align-items: center;
justify-content: center;
display: flex;
text-align: center;
color: black;
margin-bottom: 20px;
height: 220px;
margin-left: 850px;
padding: 30px;
border-radius: 100px;


`;


const Container4 = styled.div`
box-sizing: border-box;
border: 2px solid white;
width: 600px;
background: linear-gradient(gray, pink);
color: white;
height: 250px;
margin-left: 850px;
padding: 20px;

`;

const Foto = styled.img`
height: 300px;
width: 200px;
border-radius: 30px;

`


const FotoContainer = styled.div`
margin-left: 20px;
`;


const Foto2 = styled.img`
height: 200px;
width: 300px;
border-radius: 30px;
`;


const Fim = styled.div`

width: 100%;
bottom: 1px;
box-sizing: border-box;
color: white
;
border: 1px solid black;
display: flex;
justify-content: center;

`

const A = styled.a`
margin-top: 20px;
margin-left: 10px;
`

