import Link from 'next/link';

import { Box, Flex, Spacer, HStack, Stack, Heading } from '@chakra-ui/react';
import { DropletHalf } from 'tabler-icons-react';

export default function NavBar() {
  return (
    <Box px={8} pb={8}>
      <Stack direction={['column', 'row']} py={8} color='teal.100'>
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
        </HStack>
      </Stack>
    </Box >
  )
}
