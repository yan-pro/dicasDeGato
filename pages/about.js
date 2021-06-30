import styled from "styled-components"
import Link from "next/link"
import Navigation from "../components/Navigation"
import Head from "next/head"
import Informações from "../components/Informações"

function about() {
    return (
        <>
            <Head>
                <title>dicas felinas</title>
            </Head>
            <Container>
        <Navigation />
        <Informações />
        </Container>
        </>
    )
}

export default about

const Container = styled.div`

`;





