import { useState } from 'react'
import {
  FormControl,
  InputLeftAddon,
  InputGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Text,
  Box,
  Image,
  FormLabel,
  HStack,
  VStack,
  Flex,
  Center
} from '@chakra-ui/react'


export default function DripForm() {
  const [drip, setDrip] = useState({});
  const onChange = (event: any): void => {
    debugger
    const { name, value } = event.currentTarget;
    setDrip(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };
  console.log(drip)
  return (
    <FormControl>
      <HStack>
        <InputGroup>
          <VStack>
            <FormLabel>Months</FormLabel>
            <NumberInput maxW={[24, 48]} min={0} max={12}>
              <NumberInputField step={0.01} onChange={onChange} name='months' placeholder='1' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
        </InputGroup>
        <InputGroup>
          <VStack>
            <FormLabel>$DAI/month</FormLabel>
            <Flex>
              <InputLeftAddon bg='none' display={['none', 'flex']}>
                <Image position='relative' w='25px' src='https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=022' />
              </InputLeftAddon>
              <NumberInput maxW={[24, 48]} onChange={setDrip} min={3} name='amount' placeholder='3'>
                <NumberInputField step={0.01} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </VStack>
        </InputGroup>
      </HStack>
      <Center m='0 auto'>
        <Button mt={4} color='white' bg='#444' _hover={{ bgColor: '#eee', color: '#01281a', outlineWidth: '0.25px', outlineColor: '#01281a' }}>DRIP</Button>
        {/* {drip.length && <Text fontSize='xs' fontWeight='hairline'>{`${drip.amount} $DAI per month will be transacted`}</Text>} */}
      </Center>
    </FormControl >
  )
}