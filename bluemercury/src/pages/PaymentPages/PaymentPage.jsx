import {  ChevronLeftIcon, ChevronRightIcon, LockIcon, QuestionIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, FormControl, HStack, Image, Input, InputGroup, InputRightElement, Text, Tooltip, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteAllItemAfterOrder } from './deleteAllItemAfterOrder'
import { ImageLogo } from './Image'
import { OtpModal } from './OtpModal'
import PromoCodeAndFinalAmount from './PromoCodeAndFinalAmount'
const initDetails = {
  cardNumber : "",
  name : "",
  expireDate : "",
  securityCode : ""
}
export const PaymentPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

    const {shippingCost,address,CartCount,Cart_Data} = useSelector(state=>state)
    const [details,setdetails] = useState(initDetails);
    const [otp,setOtp] = useState('');
    const navigate = useNavigate();
    const toast = useToast()
    const dispatch = useDispatch();
    const handleForm = (e)=>{
      let {name,value} = e.target;
      setdetails({...details,[name]:value});
    }
    const handleOtp = ()=>{
      if(otp==='1234'){
      deleteAllItemAfterOrder(CartCount,Cart_Data,dispatch);
        navigate('/')
        toast({
          title: 'Successfully Ordered',
          position: 'top',
          isClosable: true,
          status : 'success',
          duration : 9000
        })
      }else{
        toast({
          title: 'Wrong OTP Entered.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  const handleOrder = ()=>{
    if(details.cardNumber.length<16 || details.cardNumber.length>16 || details.securityCode.length<3 || details.securityCode.length>4){
      toast({
        title: 'Wrong Details Entered.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    else{
      onOpen();
    }
  }
  return (
    <Box  w="80%" m="auto" p="15px" display="flex" justifyContent='space-between' fontSize={{base:'base',sm:'sm',md:'md',lg:'lg'}}>
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
            <BreadcrumbLink  color="GrayText"  fontSize="15px">
              Shipping method
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black"
              fontWeight="400" fontSize="15px">
              Payment method
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box border ='1px solid #cbcbcb' padding='10px' mt='40px'>
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
        <Flex>
          <Text color='#9f9f9f' fontSize='smaller'>continuing, you agree to Bluemercury's</Text>
          <Text ml='2px' color='#9f9f9f' fontSize='smaller' textDecoration='underline' cursor='pointer'>Privacy Practices.</Text>
        </Flex>
        <Text
          fontSize="22px"
      
          mt="45px"
          letterSpacing=".5px"
          color="#1e3355"
          fontFamily="sans-serif"
        >
          Payment Method
        </Text>
        <Text ml='2px' mb="16px" color='#9f9f9f' fontSize='smaller' >All transactions are secure and encrypted.</Text>
        
        <VStack border='1px solid #9f9f9f'>
          <Flex borderBottom='1px solid #9f9f9f' w='100%' justifyContent='space-between' alignItems='center' p='16px' >
            <Text color='#12284C' fontSize='20px' letterSpacing='0.6px' fontWeight='medium' fontFamily='sans-serif'>CREDIT CARD</Text>
            <HStack>
              <Image width='35px' src='https://pngimg.com/uploads/visa/small/visa_PNG36.png' alt='visa'></Image>
              <Image width='35px' src='https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png' alt='mastercard'></Image>
              <Image width='35px' src='https://www.pngmart.com/files/5/American-Express-PNG-Transparent-Image.png' alt='amex'></Image>
              <Image width='35px' src='https://e7.pngegg.com/pngimages/557/637/png-clipart-discover-financial-services-discover-card-credit-card-diners-club-international-credit-card-text-rectangle-thumbnail.png' alt='discover card'></Image>
            </HStack>
          </Flex>
          <FormControl isRequired padding='15px'>
          <InputGroup>
          <Input type='number' focusBorderColor='black' size='lg' placeholder='Card number' rounded='none' mb='15px' name='cardNumber'  value={details.cardNumber} onChange={handleForm}/>
          <InputRightElement children={ <Tooltip placement='top-start'  hasArrow label='All transactions are secure and encrypted' color='white' bg='black' ><LockIcon color='#919191' /></Tooltip>} />
          </InputGroup>
          <Input size='lg' focusBorderColor='black' placeholder='Name on card' rounded='none' mb='15px' name='name' value={details.name} onChange={handleForm} />
          <HStack>
          <Input type='date' focusBorderColor='black' width='500px' size='lg' placeholder='Expiration date (MM/YY)' ml='10px' rounded='none' name='expireDate' value={details.expireDate} onChange={handleForm} />
          <InputGroup>
          <Input type='number' htmlSize={20} focusBorderColor='black' width='auto'  size='lg' placeholder='Security code' rounded='none' name='securityCode' value={details.securityCode} onChange={handleForm} />
          <InputRightElement children={ <Tooltip placement='top-start' hasArrow label='3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front.' color='white' bg='black' ><QuestionIcon color='#919191' /></Tooltip>} />
          </InputGroup>
          </HStack>
             </FormControl>
        </VStack>
        <HStack justifyContent='space-between' alignItems='center' mt="40px">
          <Button  color='none' variant='link' outline='none'fontWeight='light' fontSize='15px' lineHeight='3px' onClick={()=>navigate('/shipping')}><ChevronLeftIcon/>RETURN TO SHIPPING METHOD</Button>
          <Button bg='#12284c' colorScheme='white' pl='40px' pr='40px' pt='22px' pb='22px' rounded='none'
          onClick={handleOrder} >COMPLETE ORDER</Button>
          </HStack>
         
          <OtpModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} otp={otp} setOtp={setOtp} handleOtp={handleOtp} />
        </Box>

        <Box>
            <PromoCodeAndFinalAmount shippingCost={shippingCost}/>
        </Box>
    </Box>
  )
}
