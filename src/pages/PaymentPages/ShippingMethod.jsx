import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Flex, HStack, Image, Radio, RadioGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getShippingCost } from '../../Redux/action'
import { ImageLogo } from './Image'
import PromoCodeAndFinalAmount from './PromoCodeAndFinalAmount'

function ShippingMethod() {
    let {address} = useSelector(state=>state)
    const [value, setValue] = React.useState(7);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePayment = ()=>{
      dispatch(getShippingCost(value))
      navigate('/payment')
    }
  return (
   <Box w="80%" m="auto" p="15px" display="flex" justifyContent='space-between' fontSize={{base:'base',sm:'sm',md:'md',lg:'lg'}}>
    <Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        padding="60px" width='700px'>
            <ImageLogo/>
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
         color="GrayText" fontSize="15px"
            >
              Customer Information
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink  color="black"
              fontWeight="400"  fontSize="15px">
              Shipping method
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="GrayText" fontSize="15px">
              Payment method
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
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
        <Box border ='1px solid #cbcbcb' padding='10px'>
          <Box p='10px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text color='#233157' fontSize={22}>Contact</Text>
              <Text color='#12284C' fontSize={14} fontWeight='light' letterSpacing='1px'>{address.email}</Text>
            </Flex>
          </Box>
          <hr color='#cbcbcb' height='1px' />
          <Box p='10px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text  fontSize={22} color='#233157'>Ship To</Text>
              <Text color='#12284C' fontSize={14} fontWeight='light' letterSpacing='0.5px'>{address.address},{address.apartment},{address.city},{address.zipcode},{address.Country}</Text>
            </Flex>
          </Box>
        </Box>
        <Text
          fontSize="20px"
          mb="16px"
          mt="45px"
          letterSpacing=".5px"
          color="#1e3355"
          fontFamily="sans-serif"
        >
          Shipping method
        </Text>
        <Box border ='1px solid #cbcbcb' padding='10px'>
          <Box p='10px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <RadioGroup value={value} onChange={setValue}>
            <Radio colorScheme='blue' value='7'>
            <Text color='#233157' fontSize={14}>Ground Shipping (3-7 days)</Text>
             </Radio> 
             </RadioGroup>      
              <Text color='#12284C' fontSize={18} fontWeight='light' letterSpacing='1px'>$7.00</Text>
            </Flex>
          </Box>
          <hr color='#cbcbcb' height='1px' />
          <Box p='10px'>
        
            
            <Flex justifyContent='space-between' alignItems='center'>
              <RadioGroup value={value} onChange={setValue}>
             <Radio colorScheme='blue' value='20' >
              <Text  fontSize={14} color='#233157'>Overnight Shipping (Excludes PO Box or APO/FPO)</Text>
              </Radio>
              </RadioGroup>
              <Text color='#12284C' fontSize={18} fontWeight='light' letterSpacing='0.5px'>$20.00</Text>
            </Flex>
          </Box>
        </Box>
          <HStack justifyContent='space-between' alignItems='center' mt="40px">
          <Button  color='none' variant='link' outline='none'fontWeight='light' fontSize='15px' lineHeight='3px' onClick={()=>navigate('/contact')}><ChevronLeftIcon/>RETURN TO INFORMATION</Button>
          <Button bg='#12284c' colorScheme='white' pl='40px' pr='40px' pt='22px' pb='22px' rounded='none'
         onClick={handlePayment} >CONTINUE TO PAYMENT</Button>
          </HStack>
    </Box>
    
    <Box>
        <PromoCodeAndFinalAmount shippingCost={value}/>
    </Box>
   </Box>
  )
}

export default ShippingMethod