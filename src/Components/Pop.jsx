import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from '@chakra-ui/react'
import React from 'react'

export const Pop = () => {
  return (
    <Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Header</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme='blue'>Button</Button>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
  )
}
