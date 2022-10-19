import { Box,Flex,FormControl,FormLabel,Heading,Spacer,Switch,Text } from '@chakra-ui/react'
import React from 'react'

export const NicheKa = () => {
  return (



    <Flex minWidth='max-content' alignItems='center' gap='2' mt="4">
  <Box p='2'>
    <Heading size='lg'  fontWeight={300} ></Heading>
  </Box>
  <Spacer />

  <Heading  fontSize='sm' fontWeight={400}> </Heading>
  
  <Box> <FormControl display='flex' alignItems='center'>
  <FormLabel htmlFor='email-alerts' mb='0' fontWeight={300} >
    Show out of stock items ?
  </FormLabel>
  <Switch id='email-alerts' />
  <Text ml="4" fontWeight={300} >1245</Text>
</FormControl>

</Box>

</Flex>


   
  )
}
