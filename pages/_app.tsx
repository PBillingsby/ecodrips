import '../styles/globals.css'
import Navbar from '../components/Navbar'
import * as React from 'react'
import { ChakraProvider, Container, Box } from '@chakra-ui/react'

export default function App({ Component }) {
  return (
    <ChakraProvider>
      <Container maxW='container.xl'>
        <Navbar />
        <Box border='1px solid black' height='80vh' p='4'>
          <Component />
        </Box>
      </Container>
    </ChakraProvider>
  )
}
