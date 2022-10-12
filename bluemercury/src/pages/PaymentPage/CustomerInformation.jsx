import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
let totalPrice = JSON.parse(localStorage.getItem("totalprice")) || 0;

function CustomerInformation() {
  const [promoCode,SetPromoCode] = useState('');
  const [finalAmount,SetfinalAmount] = useState(totalPrice);
  const [alreadyapplied,SetalreadyApplied] = useState(false);
  const toast = useToast()

  const handlePromoCode = ()=>{
    if(promoCode=='masai10' && alreadyapplied===false){
      toast({
        title: 'Promo Code Applied.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      let amountafterDiscount = (finalAmount)-((finalAmount*10)/100);
      SetfinalAmount(amountafterDiscount)
      SetalreadyApplied(true);
      SetPromoCode("");
    }else if(promoCode!=='masai10'){
      toast({
        title: 'Wrong Promo Code Applied Try Again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }else{
      toast({
        title: 'You have already applied the Promo Code',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      SetPromoCode("");
    }
  }
const handlePromoInput = (e)=>{
SetPromoCode(e.target.value);
}

  return (
    <Box w="80%" m="auto" p="15px" display="flex" justifyContent='space-between' fontSize={{base:'base',sm:'sm',md:'md',lg:'lg'}}>
      <Box
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        padding="60px"
      >
        <Center>
          <Image
            width="248px"
            mb="15px"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/blm-checkout-logo.png?118355"
          ></Image>
        </Center>

        <Breadcrumb
          spacing="3px"
          separator={<ChevronRightIcon color="gray.500" mt="-4px" />}
          alignItems="center"
        >
          <BreadcrumbItem>
            <BreadcrumbLink color="GrayText" fontSize="15px">
              Cart
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              color="black"
              fontWeight="400"
              fontSize="15px"
              fontFamily="sans-serif"
            >
              Customer Information
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="GrayText" fontSize="15px">
              Shipping method
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="GrayText" fontSize="15px">
              Payment method
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Center
          mt="20px"
          mb="-10px"
          fontSize="1em"
          color="#737373"
          fontWeight="500"
          ml="260px"
          _after={{
            content: `""`,
            border: "1px #e6e6e6 solid",
            flex: "1 0 2em",
            borderBottom: "0",
            m: "auto",
          }}
        >
          Express Checkout
        </Center>

        <Center
          p="20px 20px 20px"
          border="1px #e6e6e6 solid"
          borderTop="none"
          rounded="3px"
        >
          <Button
            bg="#ffc439"
            colorScheme="white"
            pl="100px"
            pr="100px"
            pt="25px"
            pb="25px"
            rounded="5px"
          >
            <Image
              width="90px"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"
            ></Image>
          </Button>
        </Center>

        <Center color="#b8b8b8" mt="25px" fontFamily="sans-serif">
          OR
        </Center>
        <Text
          fontSize="20px"
          mb="16px"
          mt="20px"
          letterSpacing=".5px"
          color="#1e3355"
          fontFamily="sans-serif"
        >
          Contact information
        </Text>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            htmlSize={45}
            width="auto"
            onFocus={{ borderColor: "#12284c" }}
            type="email"
            maxHeight="50px"
            fontFamily="sans-serif"
            _hover="none"
            borderColor="#12284c"
            size="lg"
            placeholder="Enter Your Email"
          />
          <br />
          <Checkbox colorScheme="blue" fontFamily="sans-serif" size="md">
            Email me with news and offers
          </Checkbox>
        </FormControl>

        <Text
          fontSize="20px"
          mb="16px"
          mt="25px"
          letterSpacing=".5px"
          color="#1e3355"
          fontFamily="sans-serif"
        >
          Shipping address
        </Text>
        <FormControl>
          <FormLabel>COUNTRY/REGION</FormLabel>
          <Select
            maxHeight="50px"
            fontFamily="sans-serif"
            _hover="none"
            borderColor="#12284c"
            size="lg"
            placeholder="United States"
          ></Select>
          <Input
            maxHeight="50px"
            fontFamily="sans-serif"
            _hover="none"
            borderColor="#12284c"
            size="lg"
            placeholder="First Name"
            htmlSize={25}
            width="auto"
            mt="17px"
            mr="10px"
          />
          <Input
            maxHeight="50px"
            fontFamily="sans-serif"
            _hover="none"
            borderColor="#12284c"
            size="lg"
            placeholder="Last Name"
            htmlSize={25}
            width="auto"
            mt="17px"
            mb="17px"
          />
          <Stack spacing={5}>
            <Input
              placeholder="Address"
              size="lg"
              fontFamily="sans-serif"
              _hover="none"
              borderColor="#12284c"
            />
            <Input
              placeholder="Apartment, suite, etc.(optional)"
              size="lg"
              fontFamily="sans-serif"
              _hover="none"
              borderColor="#12284c"
            />
          </Stack>
          <HStack mt="17px">
            <Input
              maxHeight="50px"
              fontFamily="sans-serif"
              _hover="none"
              borderColor="#12284c"
              size="lg"
              placeholder="City"
              htmlSize={16}
              width="auto"
              mr="10px"
            />
            <Select
              placeholder="State"
              width="220px"
              _hover="none"
              fontFamily="sans-serif"
              size="lg"
              borderColor="#12284c"
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="American Samoa">American Samoa</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansans">Arkansans</option>
              <option value="California">California</option>
            </Select>
            <Input
              maxHeight="50px"
              fontFamily="sans-serif"
              _hover="none"
              borderColor="#12284c"
              size="lg"
              placeholder="Zip code"
              htmlSize={16}
              width="auto"
              mt="17px"
              mb="17px"
            />
          </HStack>
          <Checkbox>Save this information for next time</Checkbox>
        </FormControl>
        <HStack mt="10px">
          <Text>By continuing, you agree to Bluemercury's </Text>
          <Text cursor="pointer" textDecoration="underline">
            Privacy Practices.
          </Text>
        </HStack>
        <Flex justifyContent="space-between" mt="40px">
          <Button  color='none' variant='link' outline='none'><ChevronLeftIcon/>RETURN TO CART</Button>
          <Button bg='#12284c' colorScheme='white' pl='50px' pr='50px' pt='22px' pb='22px' rounded='none'>CONTINUE TO SHIPPING METHOD</Button>
        </Flex>
      </Box>

      <Box ml='20px'>
        <HStack>/
        <Input placeholder="Gift Card/Promo Code"
        fontFamily="sans-serif"
              _hover="none"
              borderColor="#12284c"
              size="lg"
              htmlSize={16}
              width="auto"
              mt="17px"
              mb="20px"
              value={promoCode} onChange={handlePromoInput} />
        <Button
        bg='#12284c' colorScheme='white' pl='60px' pr='50px' pt='22px' pb='22px' rounded='3px'
        onClick={handlePromoCode}>APPLY</Button>
        </HStack>  
        <hr />
        <Flex justifyContent='space-between'
         alignItems='center'
        m='20px'>
          <Text color='#666f81 '>Subtotal</Text>
          <Text>${totalPrice}</Text>
        </Flex>
        <Flex justifyContent='space-between'
        alignItems='center'
        m='20px'>
          <Text color='#666f81 '>Shipping</Text>
          <Text fontSize='14px'>Calculated at next step</Text>
        </Flex>
        <hr />
        <Flex justifyContent='space-between'
        alignItems='center' m='20px'>
          <Text color='#12284c '>Total</Text>
          <Text><span>USD </span> ${finalAmount}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default CustomerInformation;
