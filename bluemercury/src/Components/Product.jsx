import { Box, Heading, Image, Text, Show, Hide, Price ,IconButton,Button,Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react';
import {  useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { TbHeartPlus } from 'react-icons/tb';



export const Products= () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
const [data ,setData] = React.useState([]);
const [display ,setDisplay] = React.useState(false);
React.useEffect(()=>{
fetch('http://localhost:8000/Products')
.then((res) =>res.json())
.then((res) =>{
    console.log(res);
    setData(res)
});
}, [])


function title(e){
setDisplay(true);
}



return  <div>

  <h1 fontSize="100px"> Brushes $ Tools
    <br /><br /> <br /> <br /> 
  </h1>

  <hr />
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',lg:'repeat(3, 1fr)',xl:'repeat(4, 1fr)'}} gap={2}
>
    
    {data.map(el=><GridItem key={el.Price} position="relative"  border="2px solid black"  onMouseEnter={title}><IconButton bg={0} icon={<TbHeartPlus fontSize={"25px"}/>} top={0} right="1" position="absolute"  ></IconButton><Image src={el.ProductCard__Image_src}></Image>
    <Button  id={el.Price} onClick={onOpen} border='2px solid red' bg='white' width='200px'  >Quick View</Button><Text>
      {el.ProductCard__Title}  </Text>
      <Text>${el.ProductCard__Price}</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            asdadad
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal></GridItem>)}
      <Box w="100%" h="40%" p="2">
        <Text fontWeight="800">Product Name</Text>
      </Box>
</Grid>
</div>
}
export default Products; 