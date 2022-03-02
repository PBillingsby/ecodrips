import Link from 'next/link';

import { Box, Flex, Spacer, HStack, Heading } from '@chakra-ui/react';
import { DropletHalf } from 'tabler-icons-react';

export default function NavBar() {
  return (
<<<<<<< HEAD
    <Box px={8} pb={8}>
      <Flex py={8} color='teal.100'>
        <DropletHalf />
        <Heading size='xl'>
          ecoDrips
        </Heading>
        <Spacer />
        <HStack spacing={8}>
          <Box _hover={{ color: 'white' }}>
            <Link href={'/'}> Home</Link>
          </Box>
          <Box _hover={{ color: 'white' }}>
            <Link href={'/about'}>About</Link>
          </Box>
          <Box _hover={{ color: 'white' }}>
            <Link href={'/tracker'}>Tracker</Link>
          </Box>
=======
    <Box px='8' pb='8'>
      <Flex pb='8' pt='8'>
        <DropletHalf color='green' />
        <Heading size='md' color='green'>
          ecoDrips
        </Heading>
        <Spacer />
        <HStack color='green' spacing={8}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/tracker'}>Tracker</Link>
>>>>>>> main
        </HStack>
      </Flex>
    </Box >
  )
}
