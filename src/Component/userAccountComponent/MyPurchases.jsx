import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

const MyPurchases = () => {
  return (
    <>
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
    </>
  )
}

export default MyPurchases