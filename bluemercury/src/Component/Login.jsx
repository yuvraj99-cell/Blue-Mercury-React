import React, { useContext } from 'react'
import {Box , Button, FormControl, Heading, Input, Text} from '@chakra-ui/react';
import { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const [user , setUser]=useState({email:"",password:""});
  const [erroForm,setErrorForm]=useState(false);
  const navigate = useNavigate();
  let {isAuth, toggleAuth}=useContext(AuthContext);
  
  const handleChange=(e)=>{
    setUser({...user , [e.target.name]:e.target.value})
  }
  const userAuth=async()=>{
    setErrorForm(false);
   
    if(user.email===''||user.password===''){
      setErrorForm(true);
      return
    }
    console.log(user);
    
    setUser({email:"",password:""});
    toggleAuth(true)
    navigate('/');
  }

  return (
    <Box marginTop={20}>
      <Box  margin="auto">{isAuth && <Box margin="auto" fontSize="larger">Login Succesfull</Box>}</Box>
    <FormControl display="flex" gap={5} flexDirection='column' alignItems="center">
      <Heading fontWeight='medium'>LOGIN</Heading>
      <Box as='div'   fontSize='large' color="#12284c">Please enter your e-mail and Password:</Box>
      
      <Input required name='email' type="email" value={user.email} onChange={handleChange} _hover={{}} focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Email' size='md' width={500} />
      <Input required name='password'  value={user.password} onChange={handleChange} _hover={{}} focusBorderColor='#12284c' borderColor="black"  borderRadius="none"  placeholder='Password' size='md' width={500} />
      {erroForm && <Text color="red">Please Fill all Field</Text>}
      <Button onClick={userAuth}  bgColor="#12284c" color="white" borderRadius="none" size="md" width={500}>LOGIN</Button>
      <Box>Don't have an account? <Link to="/signup" ><Box fontWeight="bold" display="inline-block">Create one</Box></Link></Box>
    </FormControl>
    </Box>
  )
}

export default Login