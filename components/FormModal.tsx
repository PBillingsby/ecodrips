import {
  Modal,
  ModalOverlay,
  ModalContent,
  Icon,
  ModalCloseButton,
  ModalBody,
  Heading,
  Box,
  Flex
} from '@chakra-ui/react'
import { DropletHalf } from 'tabler-icons-react';
import DripForm from './DripForm'

interface FormProps {
  isOpen: boolean,
  onClose: () => void
}

export default function FormModal(props: FormProps) {
  const { isOpen, onClose } = props;
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='20%'
          backdropBlur='2px'
        />
        <ModalContent maxW={['75vh', '40vw']}>
          <Flex mt={4}>
            <Icon as={DropletHalf} color='#01281a' w={6} h={6} ml={6} />
            <Heading size='md' color='#01281a'>Start Dripping</Heading>
          </Flex>
          <ModalCloseButton size='sm' p={6} />
          <ModalBody py={6} margin='0 auto'>
            <DripForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box >
  )
}