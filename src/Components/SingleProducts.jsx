import { Box, Button, Flex, Image, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { fetchAndUpdate } from "../Redux/action";

export const SingleProducts = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const {isAuth} = useContext(AuthContext);
  const dispatch= useDispatch()
  const toast = useToast()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://blure-mercury.herokuapp.com/Products/${id}`).then((res) => {
        console.log(res.data);
      setData(res.data);

    });
  },[id]);

  const AddToCart= async () =>{
if(!isAuth.loggedin){
 return navigate('/login')
}else{
  await fetch (`https://blure-mercury.herokuapp.com/Cart`,{
    method:"POST",
    body: JSON.stringify(data),
    headers:{
    'Content-Type': 'application/json'
   }
   } )
    dispatch(fetchAndUpdate())
    toast({
      title: 'Product Added To Cart.',
      status: 'success',
      position: 'top',
      duration: 9000,
      isClosable: true,
    })
}

  }
  return (
    <Flex>
      <Flex  color="#F8F8F8"  >

        <Box bgColor="#F8F8F8" border="1px solid black "  ml="25px"  h="100px" w="100px" mr="25px" >
        <Image  src={data.ProductCard__Image_src}></Image>
        </Box>
      <Box  border="1px solid black"    color="#F8F8F8"    h="600px" w="600px" >
        <Image h="450px" w="450px"    bgColor="white"  p="auto"  mt="60px" ml="60px" src={data.ProductCard__Image_src}></Image>
      </Box>
      </Flex>
      <Box   ml="25px" w="650px"   >
        <VStack alignItems="left" ml="4" mt="10" >
          <Text fontSize="xl">{data.ProductCard__Brand}</Text>

          <Text fontSize="3xl"  > {data.ProductCard__Title}</Text>

          <Text fontSize="sm" fontWeight="bold" >{data.MerchBadge}</Text>
          <Text   fontSize="md" fontWeight="bold" >${data.ProductCard__Price}</Text>
          <Text mb="50px"  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem explicabo quo ab nobis doloremque amet corporis! Similique dolorem ducimus praesentium ab sapiente expedita consectetur commodi. Sint provident explicabo libero adipisci?</Text>
         
        </VStack>

        <Box mt="50px" bgColor="#F8F8F8"  h="150px" textAlign="center" >
          <Button onClick={AddToCart} mt="10" bgColor="#12274B" w="600px"  mb="-8" color="white" >ADD TO BAG</Button>
          <Button mt="10" w="600px" bgColor="white" border="1px solid black" borderRadius={0} color="black" >SHIPPING & RETURNS</Button>
          
          </Box>
      </Box>
    </Flex>
  );
};
