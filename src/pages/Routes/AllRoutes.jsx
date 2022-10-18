import React from "react";
import {Home} from "../../Components/Home"
import { Login } from "../../Component/Login";
import { Signup } from "../../Component/Signup";
import UserAccount from "../../Component/UserAccount";
import AccountOverview from "../../Component/userAccountComponent/AccountOverview";
import MyBluerewards from "../../Component/userAccountComponent/MyBluerewards";
import MyPurchases from "../../Component/userAccountComponent/MyPurchases"
import MyWishlist from "../../Component/userAccountComponent/MyWishlist"
import AccountDetails from "../../Component/userAccountComponent/AccountDetails"
import Products from "../../Components/Product";
import { Route, Routes } from "react-router-dom";
import { SingleProducts } from "../../Components/SingleProducts";
import  Cart  from "../CartPage/Cart";
import  CustomerInformation  from "../PaymentPages/CustomerInformation";
import  ShippingMethod from "../PaymentPages/ShippingMethod";
import { PaymentPage}  from "../PaymentPages/PaymentPage";




export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user_account" element={<UserAccount />}>
        <Route path="account_overview" element={<AccountOverview />} />
        <Route path="mybluerewards" element={<MyBluerewards />} />
        <Route path="mypurchases" element={<MyPurchases />} />
        <Route path="mywishlist" element={<MyWishlist />} />
        <Route path="accountdetails" element={<AccountDetails />} />
      </Route>
      <Route path="/Products" element={<Products />} />
      <Route path="/Products/:id" element={<SingleProducts />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/contact" element={<CustomerInformation />} />
      <Route path="/shipping" element={<ShippingMethod />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};
