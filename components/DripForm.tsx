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
} from '@chakra-ui/react'

export default function DripForm() {
  const [dripAmount, setDripAmount] = useState(0);
  const onChange = (e: any) => {
    const floatAmount = parseFloat(e)
    setDripAmount(floatAmount)
  }
  return (
    <FormControl>
      <InputGroup size='md' py={4}>
        <InputLeftAddon children='$DAI' bg='none' pr={8} />
        <NumberInput onChange={onChange} name="dripAmount" value={dripAmount} step={0.01}>
          <NumberInputField placeholder='per month' />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button ml={4} color='white' bg='#444' _hover={{ bgColor: '#eee', color: '#01281a' }}>DRIP</Button>
      </InputGroup>
      {dripAmount > 0 && <p>{`You will drip ${dripAmount} $DAI per month`}</p>}
    </FormControl>
  )
}