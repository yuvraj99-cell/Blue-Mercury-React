import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const CartItem = ({data,handlequantity,RemoveCartItem}) => {
  return (
        <Box
        key={data.id}
        padding="20px"
        display="flex"
        justifyContent="space-around"
        mt="15px"
        ml="-28px"
        alignItems="center"
      >
        <Box>
          <Flex alignItems="center" ml="-10px">
            <Image
              w={{ base: "40px", md: "45px", lg: "50px", "2xl": "60px" }}
              h={{ base: "40px", md: "45px", lg: "50px", "2xl": "60px" }}
              src={data.ProductCard__Image}
            ></Image>
            <Text
              color="#64738a"
              fontSize={{
                base: "10px",
                md: "12px",
                lg: "13px",
                "2xl": "15px",
              }}
            >
             {data.ProductCard__Title}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Text
            color="#64738a"
            fontSize={{ base: "10px", md: "12px", lg: "13px", "2xl": "15px" }}
          >
            ${data.ProductCard__Price}
          </Text>
        </Box>
        <Box>
          <ButtonGroup
            mt="10px"
            size={{ base: "sm", md: "md", lg: "md", "2xl": "md" }}
            isAttached
            variant="outline"
          >
           <IconButton disabled={data.quantity<=1}  aria-label="Reduce Products" icon={<MinusIcon />} onClick={()=>handlequantity(data.id,data.quantity-1)}/>
            <Button>{data.quantity}</Button>
            <IconButton aria-label="Add Products" icon={<AddIcon />} onClick={()=>handlequantity(data.id,data.quantity+1)}/>
            
          </ButtonGroup>
          <br />
          <Button
            color="#64738a"
            ml="10px"
            bg="none"
            _active="none"
            _hover="none"
            border="none"
            textDecoration="underline"
            onClick={()=>RemoveCartItem(data.id)}
          >
            REMOVE
          </Button>
        </Box>
        <Box
          color="#64738a"
          fontSize={{ base: "10px", md: "12px", lg: "13px", "2xl": "15px" }}
        >
          ${data.ProductCard__Price*data.quantity}
        </Box>
      </Box>
    
  )
}
