import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as React from 'react'
import { ChakraProvider, Container, Box } from '@chakra-ui/react'

export default function App({ Component }: { Component: any }) {
  return (
    <ChakraProvider>
      <Container maxW='container.xl' borderRadius={4} px={4} bg='#01281a' h='95vh' mt={2}>
        <Navbar />
        <Box py={2}>
          <Component />
        </Box>
      </Container>
      <Footer />
    </ChakraProvider >
  )
}
