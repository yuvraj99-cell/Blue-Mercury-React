import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Flex, Heading, Select, Spacer } from '@chakra-ui/react';


export const SortUpper = () => {



//     const [Data, setData] = useState;

//     useEffect(() =>{
//         loadUserData();
//     }, []);

//     const loadUserData = async () =>{
//   await axios.get("http://localhost:8000").then((Response) => setData(Response.Data)).catch((err) => console.log (err))
//     };
   
  return (
  



<Flex minWidth='max-content' alignItems='center' gap='2' mt="4">
  <Box p='2'>
    <Heading size='lg'  fontWeight={300} >SKIN CARE</Heading>
  </Box>
  <Spacer />

  <Heading  fontSize='sm' fontWeight={400}>SORT BY </Heading>
  
  <Box><Select borderRadius="none"  w="56" placeholder='Select option'>
   <option value='asc'>Price low to high</option>
   <option value='desc'>Price high to low </option>
   <option value='option3'>Option 3</option>
 </Select></Box>

</Flex>
  )
}

