import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
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
          
          <Flex marginLeft={200} flexDirection="column">
          <Flex alignItems="center">
            <Text fontSize="14px" fontWeight="light" color="gray.600">My Account  </Text>
            <Text fontWeight="500"> {" >"} Account Overview</Text>
          </Flex>
          <Heading fontWeight="light">ACCOUNT OVERVIEW</Heading>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
};

export default UserAccount;
