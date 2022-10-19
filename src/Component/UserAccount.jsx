import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, Grid, Heading, Slide, Text, VStack } from "@chakra-ui/react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './user.module.css';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import {FaRegUserCircle} from "react-icons/fa"
const UserAccount = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [success , setSuccess]=useState(false);
  const navigate = useNavigate();
  const LogoutUser = () => {
    setIsAuth({ ...isAuth, data: "", loggedin: false });
    localStorage.removeItem("bluemercury-token");
      setSuccess(true);
        // setTimeout(()=>{
        //     setSuccess(false);
        //     navigate('/login')
        //   },1500)
        setSuccess(false);
       return navigate('/');
  };
  console.log(isAuth);
  useEffect(() => {
    document.querySelector("title").innerText = "My Profile | bluemercury";
  }, []);
  return (
    <>
    <Slide
        in={success}
        direction="left"
        position="fixed"
        top="0px"
        style={{ zIndex: 10 }}
      >
        <Alert status="success" w="80vw" mx="10vw" mt="50px" flexWrap="wrap">
          <AlertIcon />
          <AlertTitle>Logged In Succesfully!</AlertTitle>
          <AlertDescription>Redirecting to Home page</AlertDescription>
        </Alert>
      </Slide>

    <Box maxW="1420px" m="auto">
      <Grid my="25px">
        <Heading
          marginBottom="50px"
          py="15px"
          borderBottom="1px"
          borderColor="gray.300"
          fontWeight="light"
          fontSize="28px"
        >
          MY ACCOUNT
        </Heading>
        <Flex alignItems="flex-start">
          <Flex justifyContent="space-between" flexDirection="row">
           < FaRegUserCircle size="60px" /> 
            <Flex  ml="4" flexDirection="column">
              <Text   fontWeight="semibold" fontSize="18px">
                {isAuth.data[0].fName} {isAuth.data[0].lName}
              </Text>
              
                <Text  cursor="pointer" onClick={LogoutUser} fontSize="14px" fontWeight="400">
                  Logout
                </Text >
            </Flex>
          </Flex>

          <Flex marginLeft={225} flexDirection="column">
            <Flex alignItems="center">
              <Text fontSize="14px" fontWeight="light" color="gray.600">
                My Account{" "}
              </Text>
              <Text fontWeight="500"> {" >"} Account Overview</Text>
            </Flex>
            <Heading fontWeight="light">ACCOUNT OVERVIEW</Heading>
          </Flex>
        </Flex>
      </Grid>
      <Flex justifyContent="space-between" h="500">
        <VStack w="30%" spacing={5} alignItems="left">
          <NavLink
            to="account_overview"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            Account Overview
          </NavLink>
          <NavLink
            to="mypurchases"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            My Purchases
          </NavLink>
          <NavLink
            to="mybluerewards"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            My BlueRewards
          </NavLink>
          <NavLink
            to="mywishlist"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            My Wishlist
          </NavLink>
          <NavLink
            to="accountdetails"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            Account Details + Preferences
          </NavLink>
        </VStack>
        <Flex
          flexDirection="column"
          w="70%"
          overflow="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Outlet />
        </Flex>
      </Flex>
    </Box>
    </>
  );
};

export default UserAccount;