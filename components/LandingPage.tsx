import { Text, Box, VStack, Heading, Button, Center, Link, List, ListIcon, ListItem, Divider, useDisclosure } from '@chakra-ui/react';
import { Point } from 'tabler-icons-react';
import FormModal from './FormModal'
import HowItWorks from './HowItWorks'

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <VStack px={[0, 6]}>
      <Box p={2} color='teal.100' borderBottom='1px solid teal.100' maxW={'75vw'}>
        <Heading size='xl'>About ecoDrips</Heading>
        <Text py={2}>Welcome to ecoDrips. We are a community of crypto enthusiasts who believe <Divider orientation='vertical' />we can positively change the future of our planet through consistent and regular crypto contributions.</Text>
        <Text py={2}>Two significant challenges non-profit organizations face are:</Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={Point} color='green.500' />
            Receiving irregular donations
          </ListItem>
          <ListItem>
            <ListIcon as={Point} color='green.500' />
            Receiving varying dollar amounts
          </ListItem>
        </List>

        <Text py={2}>As a decentralized charity, our focus is to solve these two problems through a drip campaign where individuals <Divider orientation='vertical' />can commit to contributing a reoccurring amount of as little as 3 DAI per month to their favorite non-profit organization.</Text>

        <Heading size='xl'>How It Works</Heading>
        <Text>If you have been thinking about donating crypto but are not sure where to start, this is an excellent place to begin.</Text>
        <HowItWorks />
      </Box>
      <Box p={2} color='teal.100' w='50%' borderTop='3px solid white'>
        <Heading size='xl' textAlign='center'>The Drip</Heading>
      </Box>
      <Box p={2} color='teal.100' textAlign='center'>
        <Text py={2}>Here are a few ecoDrips supported non-profit organizations:</Text>
        <Text py={2}><Link fontSize={18} href="https://trees.org/crypto/" isExternal>trees.org</Link></Text>
        <Text py={2}><Link fontSize={18} href="https://www.oneearth.org/crypto/" isExternal>One Earthh</Link></Text>
        <Text py={2}><Link fontSize={18} href="https://wildlifesos.org/cryptocurrency-donations/?ref=donateincrypto.com" isExternal>Wildlife SOS</Link></Text>
        <Text py={2}><Link fontSize={18} href="https://thewaterproject.org/donate-crypto" isExternal>The Water Project</Link></Text>
      </Box>
      <Center my={[0, 4]}>
        <Button id='drip-button' onClick={onOpen} w={['10rem', '20rem']} color='#eee' p={[0, 8]} bgGradient='linear(to-r, #01281a, #316e46, #3c5e48)' _hover={{
          background: 'teal.100',
          color: '#01281a',
        }}>Start Dripping</Button>
        <FormModal isOpen={isOpen} onClose={onClose} />
      </Center>
    </VStack >
  )
}
