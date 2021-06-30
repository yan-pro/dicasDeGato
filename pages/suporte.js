import Head from "next/head";
import styled from "styled-components"
import Navigation from "../components/Navigation";
import Suport from "../components/Suport";


function pages() {
    return (
        <>
        <Container>
            <Head>
                <title>dicas felinas</title>
            </Head>
            <Navigation/>
            <Suport />
        </Container>
        </>
    )
}

export default pages

const Container = styled.div`
`;
