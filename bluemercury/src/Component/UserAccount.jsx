import { Box,Button,Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React from "react";
const UserAccount = () => {
  return (
    <Box maxW="1420px" m="auto">
      <Grid my="25px">
        <Heading
          marginBottom="50px"
          py="15px"
          borderBottom="1px"
          borderColor="gray.300"
          fontWeight="light"
          fontSize="28px"
        >
          MY ACCOUNT
        </Heading>
        <Flex alignItems="flex-start">
          <Flex flexDirection="row">
            <Box mr={10} w="50px" h="45px" bgColor="gray.600"></Box>
            <Flex flexDirection="column">
              <Text fontWeight="bold" fontSize="16px">
                Vinay Khairnar
              </Text>
              <Link>
                <Text fontSize="14px" fontWeight="400">
                  Logout
                </Text>
              </Link>
            </Flex>
          </Flex>
          
          <Flex marginLeft={300} flexDirection="column">
          <Flex alignItems="center">
            <Text fontSize="14px" fontWeight="light" color="gray.600">My Account  </Text>
            <Text fontWeight="500"> {" >"} Account Overview</Text>
          </Flex>
          <Heading fontWeight="light">ACCOUNT OVERVIEW</Heading>
          </Flex>
        </Flex>
      </Grid>
      <Flex justifyContent="space-between"  h="500">
          <VStack   w="30%" spacing={5}  alignItems="left" >
          <Box w="90%" px={10} py="6px" border="1px" borderColor="#12284c" bgColor="#12284c" color="white">Account Overview</Box>
          <Box w="80%" px={10} py="6px" border="1px" bgColor="transparent">My BlueRewards</Box>
          <Box w="80%" px={10} py="6px" border="1px" bgColor="transparent">My Wishlist</Box>
          <Box w="80%" px={10} py="6px" border="1px" bgColor="transparent">My Purchases</Box>
          <Box w="80%" px={10} py="6px" border="1px" bgColor="transparent">Account Details + Preferences</Box>
          </VStack>
          <Flex flexDirection="column" w="70%" overflow="scroll" sx={
     { 
    '::-webkit-scrollbar':{
           display:'none'
       }
    }
  }>
            <Box marginBottom="10">
              <Text paddingBottom="3" fontWeight="bold">MY BLUEREWARDS</Text>
              <Box p="15px" w="100%"  border="1px">
                  <Text p="15px" >Earn $10 for every $250 you spend, plus free birthday gifts & treatments</Text>
                  <Button p="15px" bgColor="#12284c" color="white" borderRadius="none">JOIN NOW</Button>
              </Box>
            </Box>

            <Box marginBottom="10">
              <Text paddingBottom="3" fontWeight="bold">MY PURCHASES</Text>
              <Box p="15px" w="100%"  border="1px">
                  <Text p="15px" >You have not placed any orders.</Text>
              </Box>
            </Box>

            <Box marginBottom="10">
              <Text paddingBottom="3" fontWeight="bold">MY WISHLIST</Text>
              <Box p="15px" w="100%"  border="1px">
                  <Text p="15px" >There are no products in your wishlist</Text>
              </Box>
            </Box>

            <Box marginBottom="10">
              <Text paddingBottom="3" fontWeight="bold">MY ACCOUNT INFORMATION</Text>
              <Box p="15px" w="100%"  border="1px">
                  <Text p="15px" >There are no profile information</Text>
              </Box>
            </Box>
          
            
          </Flex>
      </Flex>
    </Box>
  );
};

export default UserAccount;
