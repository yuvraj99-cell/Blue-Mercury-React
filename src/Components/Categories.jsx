import React from 'react'
import { Box , Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Categories = () => {
  return (
    <Box>
    

<Box mt="-10">


<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</Box>


    <Box  mt="12">
    <Text align="left"  ml="3"   fontFamily="Montserrat Regular" sans-serif > SKIN CARE CATEGORY</Text>
    <Text  align="left"  mt="7" ml="1" fontSize='xs' as='i'   fontFamily="Montserrat Regular" sans-serif >Select One to narrow results</Text>
<Divider mt="4" mb="6" borderColor="gary.200" ></Divider>

<Text fontSize='sm' fontWeight={200} align="left" mt="7" ml="4" >Cleansers</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Exfoliators & Peels</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Eye Care</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Gifts</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >lips</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Mask</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Moisturizers</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Sun Care</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Tools & Devices</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Treatement & Serums</Text>
<Text fontSize='sm' fontWeight={200} align="left" mt="1.5" ml="4" >Vitamins & Supplements</Text>
    </Box>



    <Box m="5" ml="-2"fontWeight={400} fontSize='sm' >FILTERS BY SKIN CARE   </Box>

    </Box>
  )
}
