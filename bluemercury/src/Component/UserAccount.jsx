import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import "./user.css";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

const UserAccount = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const LogoutUser = () => {
    setIsAuth({ ...isAuth, data: "", loggedin: false });
    localStorage.removeItem("bluemercury-user");
    Navigate("/");
  };

  useEffect(() => {
    document.querySelector("title").innerText = "My Profile | bluemercury";
  }, []);
  return (
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
          <Flex flexDirection="row">
            <Box mr={10} w="50px" h="45px" bgColor="gray.600"></Box>
            <Flex flexDirection="column">
              <Text fontWeight="bold" fontSize="16px">
                Vinay Khairnar
              </Text>
              <Link to="/">
                <Text onClick={LogoutUser} fontSize="14px" fontWeight="400">
                  Logout
                </Text>
              </Link>
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
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Account Overview
          </NavLink>
          <NavLink
            to="mypurchases"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            My Purchases
          </NavLink>
          <NavLink
            to="mybluerewards"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            My BlueRewards
          </NavLink>
          <NavLink
            to="mywishlist"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            My Wishlist
          </NavLink>
          <NavLink
            to="accountdetails"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
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
  );
};

export default UserAccount;
