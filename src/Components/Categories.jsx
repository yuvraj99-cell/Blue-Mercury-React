import React from 'react'
import { Box , Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import axios from 'axios'
//https://blure-mercury.herokuapp.com/Product?MerchBadge=${cat}
export const Categories = ({setData,setloading}) => {

  const changeFilter= async (cat)=>{
    
      setloading(true);
      let res = await fetch(`https://blure-mercury.herokuapp.com/Products?MerchBadge=${cat}`)
      let data = await res.json();
      setData(data);
      setloading(false);

   
      setloading(true);
      let res2 = await fetch(`https://blure-mercury.herokuapp.com/Products?MerchBadge_2=${cat}`)
      let data2 = await res2.json();
      setData([...data,...data2]);
      setloading(false);
 
   
  }
  return (
    <Box>
    

<Box mt="-10">


<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/Products'>Skin Care</BreadcrumbLink>
  </BreadcrumbItem>

 
</Breadcrumb>
</Box>


    <Box  mt="12">
    <Text align="left"  ml="3"   fontFamily="Montserrat Regular" sans-serif > SKIN CARE CATEGORY</Text>
    <Text  align="left"  mt="7" ml="1" fontSize='xs' as='i'   fontFamily="Montserrat Regular" sans-serif >Select One to narrow results</Text>
<Divider mt="4" mb="6" borderColor="gary.200" ></Divider>

<Text onClick={()=>{changeFilter("Best Seller")}} fontSize='sm' fontWeight={200} align="left" mt="7" ml="4" >Best Sellers</Text>
<Text onClick={()=>{changeFilter("Conscious Beauty")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Conscious Beauty</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Limited Edition</Text>
<Text onClick={()=>{changeFilter("Exclusive")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Exclusive</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >lips</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Mask</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Moisturizers</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Sun Care</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Tools & Devices</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Treatement & Serums</Text>
<Text onClick={()=>{changeFilter("Limited Edition")}} fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Vitamins & Supplements</Text>
    </Box>



    <Box m="5" ml="-2"fontWeight={400} fontSize='sm' >FILTERS BY SKIN CARE   </Box>

    </Box>
  )
}
