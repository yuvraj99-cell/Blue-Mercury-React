import React from "react";
import { Route } from "react-router-dom";
import Home from "../Components/Home";
import Cart from "../pages/CartPage/Cart"
import CustomerInformation from '../pages/PaymentPages/CustomerInformation'
import ShippingMethod from '../pages/PaymentPages/ShippingMethod'
import { PaymentPage } from '../pages/PaymentPages/PaymentPage'

export const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/" element={<Products />} />{" "}
      <Route path="/Products/:id" element={<SingleProducts />} />{" "}
      <Route path="/login" element={<h1>login</h1>} />{" "}
      <Route path="/signup" element={<h1>Signup</h1>} />{" "}
      <Route path="/user_account" element={<h1>user_account</h1>}>
        <Route path="account_overview" element={<h1>Account_overview</h1>} />
        <Route path="mybluerewards" element={<h1>My_blue_rewards</h1>} />
        <Route path="mypurchases" element={<h1>my_purchases</h1>} />
        <Route path="mywishlist" element={<h1>Account_wishlist</h1>} />
        <Route path="accountdetails" element={<h1>Account_details</h1>} />
      </Route>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<CustomerInformation/>} />
      <Route path="/shipping" element={<ShippingMethod/>} />
      <Route path="/payment" element={<PaymentPage/>} />
    
    </Routes>
  );
};
