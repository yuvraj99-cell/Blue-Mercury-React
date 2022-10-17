import { Box, Heading} from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
        <Heading>HOME</Heading>
        <NavLink to="/user_account/account_overview">My account</NavLink>
    </Box>
  )
}

export default Home;