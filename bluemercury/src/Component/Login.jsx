import React from 'react'
import {Box , Button, Heading, Input, Text, VStack} from '@chakra-ui/react';
import { useState } from 'react';

const Login = () => {
  const [user , setUser]=useState({email:"",password:""});
  const [erroForm,setErrorForm]=useState(false);
  
  const handleChange=(e)=>{
    setUser({...user , [e.target.name]:e.target.value})
  }
  const userAuth=()=>{
    setErrorForm(false);
    if(user.email===''||user.password===''){
      setErrorForm(true);
      return
    }
    console.log(user);
    setUser({email:"",password:""});
  }

  return (
    <Box marginTop={20}>
    <VStack gap={5} flexDirection='column' alignItems="center">
      <Heading fontWeight='medium'>LOGIN</Heading>
      <Box as='div'   fontSize='large' color="#12284c">Please enter your e-mail and Password:</Box>
      <Input name='email' value={user.email} onChange={handleChange} _hover='none' focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Email' size='md' width={500} />
      <Input name='password' value={user.password} onChange={handleChange} _hover='none' focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Password' size='md' width={500} />
      {erroForm && <Text color="red">Please Fill all Field</Text>}
      <Button onClick={userAuth}  bgColor="#12284c" color="white" borderRadius="none" size="md" width={500}>LOGIN</Button>
      <Box>Don't have an account? <span>Create one</span></Box>
    </VStack>
    </Box>
  )
}

export default Login