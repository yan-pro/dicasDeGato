import styled from "styled-components"
import Link from "next/link"

function Navigation() {
    return (
        <Container>
            <Nav>
                <ul>
                <Li>
                        <Link href="/">DICAS FELINAS</Link>
                    </Li>
                    <Li >
                        <Link href="/">pagina inicial</Link>
                    </Li>
                    <Li >
                        <Link href="/about">sobre</Link>
                    </Li>
                    <Li >
                        <Link href="/suporte">suporte</Link>
                    </Li>
                </ul>
            </Nav>
        </Container>
    )
}

export default Navigation

const Container = styled.div`

`;

const Li = styled.li`

display: inline-block;
list-style: none;
padding: 0px 20px;

transition: all 0.8s ease 0s;
:hover{
    color: blueviolet;
    font-size: 30px;
}
`;

const Nav = styled.nav`
display: flex;
background: red;
color: white;
margin-bottom: 10px;
border-bottom: 2px solid  white;
font-weight: 500;
width: 100%;
position: fixed;
top: 0px;
z-index: 1290;
justify-content: space-between;
align-items: center;
font-size: 20px;
text-decoration: none;
height: 100px;
list-style: none;
`;
