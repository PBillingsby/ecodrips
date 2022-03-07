import { Text, OrderedList, ListIcon, ListItem } from '@chakra-ui/react';
import { Point } from 'tabler-icons-react';

export default function HowItWorks() {
  return (
    <OrderedList py={3}>
      <ListItem>
        <Text>First verify that your crypto wallet supports DAI</Text>
      </ListItem>
      <ListItem>
        <Text>Connect your wallet</Text>
      </ListItem>
      <ListItem>
        <Text>Select an organization of choice to contribute towards</Text>
      </ListItem>
      <ListItem>
        <Text>Set your drip amount</Text>
      </ListItem>
      <ListItem>
        <Text>Confirm drip</Text>
      </ListItem>
      <ListItem>
        <Text>Done! You are now positively impacting the environment for as low as 3 DAI at a time!</Text>
      </ListItem>
    </OrderedList>
  )
}

