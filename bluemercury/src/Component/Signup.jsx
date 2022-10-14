import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [createUser , setCreateUser]=useState({email:"",first_name:"",last_name:"",password:""});
    const [erroForm,setErrorForm]=useState(false);
    const navigate = useNavigate();
    const handleChange=(e)=>{
        let {value , name } = e.target;
        setCreateUser({...createUser,[name]:value});
    }
    const addUser=()=>{
      setErrorForm(false);
   
      if(createUser.email===''||createUser.password===''||createUser.first_name===''||createUser.last_name===''){
        setErrorForm(true);
        return
      }
     console.log(createUser)
        
        navigate('/')
        
    }

  return (
    <Box marginTop={50} maxW={500} mx="auto" >
    <VStack gap={3} flexDirection='column' alignItems="center">
      <Heading fontWeight='medium' color="#12284c">CREATE ACCOUNT</Heading>
      <Box as='div'   fontSize='large' color="#12284c">Complete the form below to create a bluemercury.com account.</Box>
      <Input type="email" name='email' onChange={handleChange} _hover={{}} focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Email*' size='md' width={500} required />
      <Input type="text" name='first_name' onChange={handleChange} _hover={{}} focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='First Name*' size='md' width={500}  required/>
      <Input type="text" name='last_name' onChange={handleChange} _hover={{}} focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Last Name*  ' size='md' width={500} required />
      <Input type="text" name='password' onChange={handleChange} _hover={{}} focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Password*' size='md' width={500} required />
      <Text  fontSize="xs" alignSelf="flex-end">*Indicates Required Field</Text>
      {erroForm && <Text color="red">Please Fill all Field</Text>}
      <Button onClick={addUser} bgColor="#12284c" color="white" borderRadius="none" size="md" width={300}>CREATE ACCOUNT</Button>
      <Box>Already have a bluemercury.com account? <Link to="/login"><Box fontWeight="bold" cursor="pointer" display="inline-block">Sign In</Box></Link></Box>
    </VStack>
    </Box>
  )
}

export default Signup