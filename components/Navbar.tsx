import Link from 'next/link';

import { Box, Flex, Spacer, HStack, Heading } from '@chakra-ui/react';
import { DropletHalf } from 'tabler-icons-react';

export default function NavBar() {
  return (
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
        </HStack>
      </Flex>
    </Box>
  )
}