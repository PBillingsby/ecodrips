import { Text, Box, VStack, Heading, Button, Center, useDisclosure } from '@chakra-ui/react';
import FormModal from './FormModal'

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <VStack>
      <Box p={2} color='teal.100'>
        <Heading size='lg'>About ecoDrips</Heading>
        <Text py={2}>Welcome to ecoDrips. We are a community of crypto enthusiasts who believe we can positively change the future of our planet through consistent and regular crypto contributions.</Text> 

        <Text py={2}>Two significant challenges non-profit organizations face are:</Text>
         
         <Text py={2}><strong>Receiving irregular donations</strong></Text> 
         <Text py={2}><strong>Receiving varying dollar amounts</strong></Text>

         <Text py={2}>As a decentralized charity, our focus is to solve these two problems through a drip campaign where individuals can commit to contributing a small reoccurring amount of 10 DAI to their favorite non-profit organization.</Text>
        
        <Heading size='lg'>How It Works</Heading>
        <Text py={2}>If you have been thinking about donating crypto but are not sure where to start, this is an excellent place to begin.</Text>
        <Text py={2}><strong>First Verify that your crypto wallet supports DAI</strong></Text>
        <Text py={2}><strong>Connect your wallet</strong></Text>
        <Text py={2}><strong>Select an organization of choice to contribute towards</strong></Text>
        <Text py={2}><strong>Set your drip amount</strong></Text>
        <Text py={2}><strong>Confirm drip</strong></Text>
        <Text py={2}><strong>Done! You are now positively impacting the environment 10 DAI at a time</strong>!</Text>
      </Box>
      <Box p={2} color='teal.100'>
        <Heading size='lg'>The Drip</Heading>
        <Text py={2}>Here are a few ecoDrips supported non-profit orginations:</Text>
        <Text py={2}><a href="https://thewaterproject.org/donate-crypto">The Water Project</a></Text>
        <Text py={2}><a href="https://wildlifesos.org/cryptocurrency-donations/?ref=donateincrypto.com">Wildlife SOS</a></Text>
        <Text py={2}><a href="https://trees.org/crypto/">trees.org</a></Text>
        <Text py={2}><a href="https://www.oneearth.org/crypto/">One Earth</a>h</Text>
      </Box>
      <Center my={[0, 4]}>
        <Button onClick={onOpen} w={['10rem', '20rem']} color='#eee' p={[0, 8]} bgGradient='linear(to-r, #01281a, #316e46, #3c5e48)' _hover={{
          background: "teal.100",
          color: "#01281a",
        }}>Start Dripping</Button>
        <FormModal isOpen={isOpen} onClose={onClose} />
      </Center>
    </VStack>
  )
}
