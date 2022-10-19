import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { BsBag } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAndUpdate } from '../Redux/action'

export const CartDrawer = ({name}) => {
    const { isOpen,onClose,onOpen } = useDisclosure()
    const cartref = React.useRef()
    const {CartCount,Cart_Data} = useSelector(state=>state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
       dispatch(fetchAndUpdate());
    },[CartCount])
  return (  
    <>
    <Button onClick={onOpen} position='relative' leftIcon={<BsBag size='23px'/>} color="#12284C" colorScheme='white' variant='solid' fontSize="11px" fontWeight="500">
                   <div style={{
                    position : 'absolute',
                    top : '16px',
                    left : '15px',
                    backgroundColor :  `${CartCount>0?'#5e769b':'white'}`,
                    color : 'white',
                    width : '18px',
                    borderRadius : '2px',
                    height : '14px'
                   }}>
                  {CartCount}
                   </div>
                  {name}
                </Button>          
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={cartref}
      size='sm'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontWeight='light' borderBottom='1px' borderColor='gray.300' letterSpacing='1px'>YOUR BAG</DrawerHeader>
        <DrawerBody>
            {/* {
                CartCount==0 ? <Flex justifyContent='center' alignItems='center' h='100%'>
                    <Text>
                     Your cart is empty
                    </Text>
                </Flex>
            } */}
        <Box style={{
            display : `${CartCount==0?'flex':'block'}`,
            justifyContent : `${CartCount==0?'center':'none'}`,
            alignItems : `${CartCount==0?'center':'none'}`,
            height  : `${CartCount==0?'100%':'fitContent'}`

        }} >
        <Text fontSize='11px' color='#5e769b' fontWeight='bold' p='15px 0px' >{CartCount==0 ?"Your cart is empty" :"FREE RETURNS ON ALL ORDERS"}</Text>
        </Box>
            {

                Cart_Data.map((data)=>{
                    return (
                        <Flex key={data.id} border='1px solid black' width='100%' m='auto' mb='26px' alignItems='center'>
                        <Image h='100px' w='100px' src={data.ProductCard__Image_src} ></Image>
                         <Box textAlign='start' ml='30px' fontSize='16px'>
                           <Text fontWeight='bold'>{data.ProductCard__Title}</Text>
                           <Text>{data.ProductCard__Brand}</Text>
                           <Text>${Number(data.ProductCard__Price)}</Text>
                        </Box>
                       </Flex>
                    )
                })

             }
         

        </DrawerBody>

        <DrawerFooter>
            <VStack borderTop='1px' borderColor='gray.300' width='100%' p='5px'>
              
            {

             CartCount &&
             <>
             <Text fontSize='14px'>Shipping, Taxes, Beauty Cards, and additional discounts applied at checkout</Text>
              <Button width='90%' bg='#12284c' colorScheme='white' pl='150px' pr='150px' pt='25px' pb='25px' rounded='none' onClick={()=>{
                onClose();
                navigate('/Cart')
              }}>
               VIEW BAG
              </Button>
              </>
            }
         
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
</>
  )
}