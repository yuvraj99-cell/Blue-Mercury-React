import { Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'

export const OtpModal = ({isOpen,onClose,otp,setOtp,handleOtp}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>PLEASE ENTER OTP</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Center>
      <PinInput   value={otp} onChange={setOtp}>
       <PinInputField />
       <PinInputField />
       <PinInputField />
       <PinInputField />
     </PinInput>
     </Center>
      </ModalBody>

      <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={handleOtp}>
          DONE
        </Button>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
