import React, { useContext } from 'react';
import { Flex, Image, Button,  Drawer,DrawerBody,DrawerFooter,DrawerHeader,
    DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure, Accordion,
    AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box } from '@chakra-ui/react';
import { FaRegHeart, FaSistrix} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import './top.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {useSelector} from 'react-redux'
import { CartDrawer } from './CartDrawer';
import { Privateroutes } from '../Components/PrivateRoute';

export default function Top() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {isAuth,setIsAuth}= useContext(AuthContext);
   const {CartCount} = useSelector(state=>state)
   const navigate=useNavigate()

    return (
    <div className='tn_div_1' style={{width:'100%'}}>
        <div className='tn_div_2' style={{width:'100%'}}>
        <Flex h="75px" justify="space-between" w='100%' bg="main.800">
            <Button leftIcon={<FiMapPin size='23px' />} color="#12284C" colorScheme='white' variant='solid' fontSize="11px" fontWeight="500">
                STORE & SPA LOCATOR
            </Button>
            <Image  onClick={()=>{
              navigate("/")
            }} h='38px' objectFit='cover' ml='14%' my="25px" src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='Logo' />
            <Flex w="400px">
                <Button leftIcon={<FaRegHeart size='23px'/>} color="#12284C" colorScheme='white' variant='solid' fontSize="11px" fontWeight="500">
                    WISHLIST
                </Button>
                <Button leftIcon={<FaSistrix size='23px'/>} color="#12284C" colorScheme='white' variant='solid' fontSize="11px" fontWeight="500">
                    SEARCH
                </Button>
                <Button  onClick={()=>{
                  isAuth.loggedin?navigate("/user_account/account_overview"):navigate("/login")

                }} leftIcon={<VscAccount size='23px'/>} color="#12284C" colorScheme='white' variant='solid' fontSize="11px" fontWeight="500">
                   {isAuth.loggedin?"ACCOUNT":" SIGN IN/UP "}
                </Button>
                {/* <Button onClick={onOpen} position='relative' leftIcon={<BsBag size='23px'/>} color="#12284C" colorScheme='white' variant='solid' fontSize="11px" fontWeight="500">
                   <div style={{
                    position : 'absolute',
                    top : '16px',
                    left : '15px',
                    backgroundColor :  `${CartCount>0?'red':'white'}`,
                    color : 'white',
                    width : '18px',
                    borderRadius : '2px',
                    height : '14px'
                   }}>
                  {CartCount}
                   </div>
                    BAG
                </Button> */}
                      
                        <CartDrawer name='BAG'/>
                     

            </Flex>
        </Flex>
        </div>
        
        <div className='tn_div_3'>
        <Flex h="35px" justify="space-between" bg="main.800">
            <div className='drwr'>
        <Button ref={btnRef}  bg='white' onClick={onOpen}>
           <MdMenu size='27px'/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> <Button leftIcon={<VscAccount size='20px'/>} color="#54647e" colorScheme='white' variant='solid' fontSize="14px" fontWeight="400">
                    SIGN IN/UP
                </Button></DrawerHeader>
  
            <DrawerBody>
            <Accordion allowToggle>
                
                <h2 style={{margin:'5px 17px'}} >THE CACHE</h2>
                <h2 style={{margin:'5px 17px'}}>NEW!</h2>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e" >
          BRANDS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>ALL BRANDS</Button>
    </AccordionPanel>
  </AccordionItem>
  
 


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          BEST SELLERS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:'flex',flexDirection:'column'}}>
      <Button href="" p='0px' _hover='none'  mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button> 
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          SKINCARE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:'flex',flexDirection:'column'}}>
    <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          MAKEUP
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:'flex',flexDirection:'column'}}>
    <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          HAIR
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:'flex',flexDirection:'column'}}>
    <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          BATH & BODY
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button>
        </div>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          FRAGRANCE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:'flex',flexDirection:'column'}}>
    <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  color="#54647e">
          TOOLS & ACCESSORIES
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:'flex',flexDirection:'column'}}>
    <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SHOP ALL</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>SKIN CARE</Button>
      <Button href="" p='0px' mb='2px' fontSize='12px' color='#838c9a' bg='white' h='fit-content'w='fit-content'>MAKE UP</Button>
        </div>
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
            </DrawerBody>
  
            <DrawerFooter>
            <Button ml='3px' leftIcon={<FiMapPin />} color="#54647e" colorScheme='white' variant='solid' fontSize="14px" fontWeight="400">
                STORE & SPA LOCATOR
            </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </div>
            <Flex w="fitContent" ml='5px'>
                <Button leftIcon={<FaRegHeart size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button>
                <Button leftIcon={<FaSistrix size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button>
                <Button leftIcon={<VscAccount size='20px'/>} color="#54647e" colorScheme='white' variant='solid' f fontWeight="400"></Button>
                {/* <Button leftIcon={<BsBag size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button> */}
                <CartDrawer name=''/>
            </Flex>
        </Flex>
        <div style={{height:'40px',display:'flex',justifyContent:'center'}}>
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt="logo" width='30%'height='80%'/>
        </div>
        </div>
    </div>
    );
}