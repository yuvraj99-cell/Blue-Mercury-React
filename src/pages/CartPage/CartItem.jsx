import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const CartItem = ({data,handlequantity,RemoveCartItem}) => {
  return (
        <Box
        key={data.id}
        padding="10px"
        display="grid"
        gridTemplateColumns='repeat(4,1fr)'
        gap='15%'
        ml='100px'
        justifyContent="center"  
        alignItems="center"
      >
        <Box>
          <Flex justifyContent='center' alignItems="center" >
            <Image
              w={{ base: "40px", md: "45px", lg: "50px", "2xl": "60px" }}
              h={{ base: "40px", md: "45px", lg: "50px", "2xl": "60px" }}
              src={data.ProductCard__Image_src}
            ></Image>
            <Text
              color="#64738a"
              fontSize={{
                base: "10px",
                md: "12px",
                lg: "13px",
                "2xl": "15px",
              }}
              ml='7px'
            >
             {data.ProductCard__Title}
            </Text>
          </Flex>
        </Box>
        <Box >
          <Text
            color="#64738a"
            fontSize={{ base: "10px", md: "12px", lg: "13px", "2xl": "15px" }}
            ml='90px'
          >
            ${Number(data.ProductCard__Price)}
          </Text>
        </Box>
        <Box>
          <ButtonGroup
            mt="10px"
            size={{ base: "sm", md: "md", lg: "md", "2xl": "md" }}
            isAttached
            variant="outline"
          >
           <IconButton disabled={data.quntity<=1}  aria-label="Reduce Products" icon={<MinusIcon />} onClick={()=>handlequantity(data.id,data.quntity-1)}/>
            <Button >{data.quntity}</Button>
            <IconButton aria-label="Add Products" icon={<AddIcon />} onClick={()=>handlequantity(data.id,data.quntity+1)}/>       
          </ButtonGroup>
          <br />
          <Button
            color="#64738a"
            ml="15px"
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
          ${Number(data.ProductCard__Price)*data.quntity}
        </Box>
      </Box>
    
  )
}
