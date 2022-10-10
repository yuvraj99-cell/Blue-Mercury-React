import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, WarningIcon } from "@chakra-ui/icons";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
function Cart() {
  return (
    <Box

      width={{ base: "90%", md: "85%", lg: "87%", "2xl": "90%" }}
      margin="auto"
      
    >
      <Text
        color="#12284c"
        mt="10px"
        ml={{ base: "50px", md: "100px", lg: "150px" }}
        fontSize={{ base: "20px", md: "22px", lg: "25px", "2xl": "32px" }}
        fontWeight="500"
        letterSpacing="4px"
      >
        YOUR BAG
      </Text>
      <Flex
        boxShadow="xl"
        p="3"
        rounded="md"
        bg="blue.50"
        width="35%"
        margin="auto"
        display="flex"
        justifyContent="flex-end"
        mr="10px"
        mt="30px"
      >
        <WarningIcon
          fontSize={{ base: "12px", md: "15px", lg: "20px" }}
          mt="1px"
          color="tomato"
          mr="10px"
        />
        <Text fontSize={{ base: "9px", md: "12px", lg: "18px" }}>
          Due to high volume, shipping times may be delayed.
        </Text>
      </Flex>

      {/* This is for Total Item in Cart We need to edit  */}
      <Box
        ml={{ base: "50px", md: "100px", lg: "150px" }}
        color="#3b4e6b"
        fontSize={{ base: "20px", md: "22px", lg: "25px", "2xl": "28px" }}
        mt="45px"
      >
        Your cart (1 item)
      </Box>
      {/* This is for Total Item in Cart We need to edit  */}
      <Box mt="7px" ml={{ base: "50px", md: "100px", lg: "150px" }}>
        <Flex>
          <Checkbox size="lg" borderColor="blue.300">
            <p color="#12284C">IS THIS ORDER A GIFT ?</p>
          </Checkbox>
        </Flex>
        <Text
          fontSize={{ base: "7px", md: "9px", lg: "10px", "2xl": "12px" }}
          color="#12284C"
          ml="28px"
        >
          The price of your order will be hidden on the gift receipt.
        </Text>
      </Box>

      <Box>
        <Box
          display="flex"
          justifyContent="space-around"
          mt="15px"
          ml="8px"
          alignItems="center"
        >
          <Box
            fontSize={{ base: "18px", md: "20px", lg: "22px", "2xl": "25px" }}
            color="blue.900"
          >
            Ready to Ship
          </Box>
          <Box
            fontSize={{ base: "14px", md: "15px", lg: "16px", "2xl": "18px" }}
            color="#64738a"
          >
            Price
          </Box>
          <Box
            fontSize={{ base: "14px", md: "15px", lg: "16px", "2xl": "18px" }}
            color="#64738a"
          >
            Quantity
          </Box>
          <Box
            fontSize={{ base: "14px", md: "15px", lg: "16px", "2xl": "18px" }}
            color="#64738a"
          >
            Total
          </Box>
        </Box>
        <hr
          color="blue"
          style={{
            backgroundColor: "grey",
            height: "0.5px",
            width: "85%",
            margin: "auto",
            marginTop: "10px",
          }}
        />
        {/* This is for  Items Cart We need to edit  */}
        <Box
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
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_240x240.jpg?v=1658873817"
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
                SKINCEUTICALS C E Ferulic
              </Text>
            </Flex>
          </Box>
          <Box>
            <Text
              color="#64738a"
              fontSize={{ base: "10px", md: "12px", lg: "13px", "2xl": "15px" }}
            >
              169$
            </Text>
          </Box>
          <Box>
            <ButtonGroup
              mt="10px"
              size={{ base: "sm", md: "md", lg: "md", "2xl": "md" }}
              isAttached
              variant="outline"
            >
              <IconButton aria-label="Add Products" icon={<AddIcon />} />
              <Button>1</Button>
              <IconButton aria-label="Reduce Products" icon={<MinusIcon />} />
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
            >
              REMOVE
            </Button>
          </Box>
          <Box
            color="#64738a"
            fontSize={{ base: "10px", md: "12px", lg: "13px", "2xl": "15px" }}
          >
            $169
          </Box>
        </Box>
        {/* This is for  Items Cart We need to edit  */}
        <hr
          style={{
            backgroundColor: "grey",
            height: "0.5px",
            width: "85%",
            margin: "auto",
            marginTop: "10px",
          }}
        />
      </Box>
      <Box ml={{ base: "50px", md: "100px", lg: "150px" }}
        color="#3b4e6b"
        fontSize={{ base: "15px", md: "18px", lg: "20px", "2xl": "22px" }}
        mt="40px">
       Additional Offerings
      </Box>
      <Box ml={{ base: "50px", md: "100px", lg: "150px" }}
        color="#64738a"
        fontSize={{ base: "8px", md: "10px", lg: "12px", "2xl": "15px" }}
        >
       Based on the items in your bag, you've qualified for the following offers.
      </Box>
      <hr
          style={{
            backgroundColor: "grey",
            height: "0.5px",
            width: "85%",
            margin: "auto",
            marginTop: "10px",
          }}
        />
        <Box ml={{ base: "50px", md: "100px", lg: "150px" }}>
        <Grid  padding='15px' templateColumns='repeat(5, 1fr)' gap={6} >
       <GridItem   >
        <Flex >
        <Image display={{s:'block',md:'block',lg:'block','2xl':'block'}} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"></Image>
        <Text color="#374968" ml='19px' fontSize={{ base: "12px", md: "15px", lg: "18px", "2xl": "20px" }}>MYSTERY SAMPLES<br/><Text fontSize='14px' textDecoration='underline'>Add 3 Samples</Text></Text>
        </Flex>
       </GridItem>
       <GridItem   >
        <Flex >  
        <Image display={{base:'none',md:'none',lg:'block','2xl':'block'}}  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"></Image>
        <Text  display={{base:'none',md:'none',lg:'block','2xl':'block'}} color="#52627c" ml='19px' fontSize={{ base: "8px", md: "10px", lg: "12px", "2xl": "15px" }}>MYSTERY SAMPLES <br/> #1</Text>
        </Flex>
       </GridItem>
       
       <GridItem   >
        <Flex >
        <Image display={{base:'none',md:'none',lg:'block','2xl':'block'}} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"></Image>
        <Text  display={{base:'none',md:'none',lg:'block','2xl':'block'}} color="#52627c" ml='19px' fontSize={{ base: "8px", md: "10px", lg: "12px", "2xl": "15px" }}>MYSTERY SAMPLES<br/> #2</Text>
        </Flex>

       </GridItem>
       <GridItem   >
        <Flex >
        <Image display={{base:'none',md:'none',lg:'block','2xl':'block'}} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"></Image>
        <Text  display={{base:'none',md:'none',lg:'block','2xl':'block'}} color="#52627c" ml='19px' fontSize={{ base: "8px", md: "10px", lg: "12px", "2xl": "15px" }} >MYSTERY SAMPLE <br/> #3</Text>
        </Flex>
       </GridItem>
       </Grid>
        </Box>
        <hr
          style={{
            backgroundColor: "grey",
            height: "0.5px",
            width: "85%",
            margin: "auto",
            marginTop: "10px",
          }}
        />

<Flex
        boxShadow="xl"
        p="3"
        rounded="md"
        bg="blue.50"
        width="100%"
        margin="auto"
        display="flex"
        justifyContent='space-around'
        alignItems='center'
        mr="10px"
        mt="30px"
      >
        <Text fontSize={{ base: "20px", md: "24px", lg: "28px" }} spac>
         BLUE
         REWARDS
        </Text>
        <Text fontSize={{ base: "9px", md: "10px", lg: "12px",'2xl':'small' }} ml='-180px' >JOIN OUR FREE LOYALTY PROGRAM TO RECEIVE A $10 BEAUTY CARD FOR EVERY $250 YOU SPEND.</Text>
        <Button bg='#12284c' colorScheme='white' pl='45px' pr='45px' pt='15px' pb='15px' rounded='none'>JOIN NOW</Button>
      </Flex>

       <Box display='flex' justifyContent='flex-end' mt='80px' p='10px'>
        <Box display='flex' flexDirection='column' mr='20px' >
          {/* Here We need to Show the total Amount */}
          <Box display='flex' justifyContent='flex-end' fontSize={{ base: "16px", md: "18px", lg: "20px",'2xl':'25px'}}
           color='#12284c' >Subtotal 169$</Box> 
          <Box color='#a3acba' fontSize={{ base: "9px", md: "8px", lg: "10px",'2xl':'13px'}} mt='8px'>Shipping, Taxes, Beauty Cards, and additional discounts applied at checkout</Box>
        </Box>  
        </Box>
      
        <Box display='flex' justifyContent='flex-end' mt='40px' >
          <VStack>
         <Button bg='#12284c' colorScheme='white' pl='150px' pr='150px' pt='25px' pb='25px' rounded='none'>CHECKOUT</Button>
          <Button bg='#ffc439' colorScheme='white' pl='150px' pr='150px' pt='25px' pb='25px' rounded='5px'><Image width='90px'  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"></Image></Button>
          <HStack><Text fontSize='10px'>4 interest-free payments of $19.25 with Klarna. <Text textDecoration='underline' cursor='pointer'>Learn More</Text></Text></HStack>
          </VStack>
          </Box> 
    </Box>
  );
}

export default Cart;

