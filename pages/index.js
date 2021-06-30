
import Head from 'next/head'
import Page from '../components/Header'
import Navigation from '../components/Navigation'
import Dicas from '../components/Dicas'
import styled from 'styled-components'


export default function Home() {
  return (
    <>
    <Head>
      <title>dicas felinas</title>
    </Head>
    <Container>
    <Navigation />
    <Page />
    <Dicas />
    </Container>
    </>
    
  )
}

const Container = styled.div`
background: linear-gradient(lightblue, purple, gray);
`
