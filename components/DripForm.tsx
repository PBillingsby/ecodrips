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
} from '@chakra-ui/react'


export default function DripForm() {
  const [dripAmount, setDripAmount] = useState(0);
  const onChange = (e: any) => {
    const floatAmount = parseFloat(e)
    setDripAmount(floatAmount)
  }

  return (
    <>
      <FormControl mt={2}>
        <InputGroup pt={2} size='md' py={6}>
          <InputLeftAddon bg='none'>
            <Image position='relative' w='25px' src='https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=022' />
          </InputLeftAddon>
          <NumberInput onChange={onChange} name="dripAmount">
            <NumberInputField min={0} step={0.01} placeholder='/month' />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button ml={4} color='white' bg='#444' _hover={{ bgColor: '#eee', color: '#01281a', outlineWidth: '0.25px', outlineColor: '#01281a' }}>DRIP</Button>
        </InputGroup>
      </FormControl>
      <Box pt={0}>
        {dripAmount > 0 && <Text fontSize='xs' fontWeight='hairline'>{`${dripAmount} $DAI per month will be transacted`}</Text>}
      </Box>
    </>
  )
}