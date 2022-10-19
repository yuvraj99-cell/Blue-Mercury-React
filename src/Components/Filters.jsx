import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { Divider } from '@chakra-ui/react'

function Filters() {
  return (

    
    <Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'fontSize="sm" fontWeight={300} >
             Brand
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         
        <Checkbox defaultChecked >Checkbox</Checkbox>
          

        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'  fontSize="sm" fontWeight={300} >
             Benefit
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontSize="sm" fontWeight={300} >
              Concern
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>


  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontSize="sm" fontWeight={300} >
            Ingredient Preference
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' ml="1" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>






  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'  fontSize="sm" fontWeight={300} >
            Formulation
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>




  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontSize="sm" fontWeight={300}  >
            Bristle Type
            </Box>
            {isExpanded ? (
              <MinusIcon  fontSize="sm" fontWeight={300} />
            ) : (
              <AddIcon  fontSize="sm" fontWeight={300} />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
  )
}

export default Filters