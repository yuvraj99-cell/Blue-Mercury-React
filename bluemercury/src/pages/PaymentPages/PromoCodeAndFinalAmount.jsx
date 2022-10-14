
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlreadyApplied, gettotalAmount } from "../../Redux/action";


function PromoCodeAndFinalAmount({shippingCost}) {
    const [promoCode,SetPromoCode] = useState('');
    const [finalPrice,SetfinalPrice] = useState(0);
    const toast = useToast()
    const dispatch = useDispatch();
    const {totalAmount,alreadyapplied} = useSelector(state=>state)
   let shipCost = Number(shippingCost);
   useEffect(()=>{
    if(shipCost){
      SetfinalPrice(shipCost+Number(totalAmount))
     }
   },[shipCost])

    const handlePromoCode = ()=>{
      if(promoCode=='masai10' && alreadyapplied===false){
        toast({
          title: 'Promo Code Applied.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       let amountafterDiscount=0;
        amountafterDiscount = (totalAmount)-((totalAmount*10)/100);
        dispatch(gettotalAmount(amountafterDiscount.toFixed(2)));
        dispatch(getAlreadyApplied(true));
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
    <Box>
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
              value={promoCode} disabled={alreadyapplied} onChange={handlePromoInput} />
        <Button
        bg='#12284c' colorScheme='white' pl='60px' pr='50px' pt='22px' pb='22px' rounded='3px'
        onClick={handlePromoCode} disabled={alreadyapplied}>APPLY</Button>
        </HStack>  
        <hr />
        <Flex justifyContent='space-between'
         alignItems='center'
        m='20px'>
          <Text color='#666f81 '>Subtotal</Text>
          <Text>${totalAmount}</Text>
        </Flex>
        <Flex justifyContent='space-between'
        alignItems='center'
        m='20px'>
          <Text color='#666f81 '>Shipping</Text>
          <Text fontSize='14px'>{shippingCost ? "$ " + shippingCost+".00": 'Calculated at next step' }</Text>
        </Flex>
        <hr />
        <Flex justifyContent='space-between'
        alignItems='center' m='20px'>
          <Text color='#12284c '>Total</Text>
          <Text><span>USD </span> ${finalPrice==0 ? totalAmount:finalPrice}</Text>
        </Flex>
      </Box>
  )
}

export default PromoCodeAndFinalAmount