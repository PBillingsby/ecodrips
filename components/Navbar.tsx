import Link from 'next/link';

import { Box, Flex, Spacer, HStack, Heading } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <Box px='8' pb='8'>
      <Flex pb='8' pt='8'>
        <Heading size='lg' color='green.800'>
          ecoDrips
        </Heading>
        <Spacer />
        <HStack color='green.800' spacing={8}>
          <Link href={'/about'}>About</Link>
          <Link href={'/leaderboard'}>Leaderboard</Link>
        </HStack>
      </Flex>
    </Box>
  )
}