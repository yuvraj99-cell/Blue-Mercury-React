import React, { useEffect } from "react";
import {
  Box,
  Button,

  Center,
  
  Flex,
  Grid,
  GridItem,
  HStack,

  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {  WarningIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndUpdate, fetchCartData, getcartCount, gettotalAmount } from "../../Redux/action";
import { CartItem } from "./CartItem";
import { Navigate, useNavigate } from "react-router-dom";
function Cart() {

 const {Cart_Data,CartCount,totalAmount} = useSelector(state=>state);
 let navigate = useNavigate();
const dispatch = useDispatch();
// const setCartAmount = (res2)=>{
// const amount = res2.reduce((acc,ele)=>{
// return acc+ (ele.ProductCard__Price*ele.quantity)
// },0)

// dispatch(gettotalAmount(amount));
// }
//  const fetchAndUpdate =async ()=>{
//  try {
//   let res  = await fetch(`http://localhost:3005/Cart`);
//   let res2 = await res.json();
//   dispatch(fetchCartData(res2));
//   dispatch(getcartCount(res2.length));
//   setCartAmount(res2);
//  } catch (error) {
//   console.log(error)
//  }
//  }
 useEffect(()=>{
dispatch(fetchAndUpdate());
 },[])
 
 if(CartCount==0){
  return navigate('/');
 }
 /*
This is maintaining totalprice of our cart products
 */

  /*
This is maintaining totalprice of our cart products
 */
 const RemoveCartItem = async (id)=>{
  
let res  = await fetch(`https://blure-mercury.herokuapp.com/Cart/${id}`,{
  method : 'DELETE',
})

dispatch(fetchAndUpdate());
 }
 const handlequantity =async (id,quantity)=>{
     await fetch(`https://blure-mercury.herokuapp.com/Cart/${id}`,{
  method : 'PATCH',
  body : JSON.stringify({quntity:quantity}),
  headers : {
    'Content-Type': 'application/json'
  }
 })
 dispatch(fetchAndUpdate()); 
 }
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
        Your cart ({CartCount} item)
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
            marginTop: "19px",
            marginBottom: '20px'
          }}
        />
        {/* This is for  Items Cart We need to edit  */}
        {
          Cart_Data.map((data)=>{  
           // totalprice+=data.ProductCard__Price*data.quantity;
           // localStorage.setItem('totalprice', totalprice);
          //dispatch(gettotalAmount(totalprice))
            return <CartItem key={data.id} data={data} handlequantity={handlequantity} RemoveCartItem={RemoveCartItem}/> 
          })
        }
       
        {/* This is for  Items Cart We need to edit  */}
        <hr
          style={{
            backgroundColor: "grey",
            height: "0.5px",
            width: "85%",
            margin: "auto",
            marginTop: "20px",
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
            height: "0.9px",
            width: "85%",
            margin: "auto",
            marginTop: "20px",

          }}
        />
        <Box ml={{ base: "50px", md: "100px", lg: "150px" }} mt='20px'>
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
           color='#12284c' >Subtotal {totalAmount}$</Box> 
          <Box color='#a3acba' fontSize={{ base: "9px", md: "8px", lg: "10px",'2xl':'13px'}} mt='8px'>Shipping, Taxes, Beauty Cards, and additional discounts applied at checkout</Box>
        </Box>  
        </Box>
      
        <Box display='flex' justifyContent='flex-end' mt='40px' >
          <VStack>
         <Button bg='#12284c' colorScheme='white' pl='150px' pr='150px' pt='25px' pb='25px' rounded='none' onClick={()=>{
         navigate('/contact')
         }}>CHECKOUT</Button>
          <Button bg='#ffc439' colorScheme='white' pl='150px' pr='150px' pt='25px' pb='25px' rounded='5px'><Image width='90px'  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"></Image></Button>
          <HStack><Text fontSize='10px'>4 interest-free payments of $19.25 with Klarna. <Text textDecoration='underline' cursor='pointer'>Learn More</Text></Text></HStack>
          </VStack>
          </Box> 

          <Center p='5px' color='#304362' fontSize='24px' fontFamily='sans-serif' mt='70px' fontWeight='light'>EXPERT PICKS UNDER $50</Center>
          <Center>
            <Image src="https://drive.google.com/uc?export=view&id=1pekqlEXiwAV8G3-9xH1GY3DS6_gdn53f"></Image>
          </Center>
          
          <Center p='5px' color='#304362' fontSize='24px' fontFamily='sans-serif' mt='70px' fontWeight='light'>BEAUTY LOVERS LIKE YOU ALSO VIEWED</Center>
          <Center>
            <Image src="https://drive.google.com/uc?export=view&id=1UxZmEmsq8js5QG93rONQBRrtOuuY5ZiO"></Image>
          </Center>
    </Box>
  );
}

export default Cart;