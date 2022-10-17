
import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Product";
import { Route, Routes } from "react-router-dom";
import { SingleProducts } from "./Components/SingleProducts";

function App() {
  return (
    <div className="App">
      <Routes>


      <Route path="/Products" element={<Products />}>
          {" "}
        </Route>

        <Route path="/Products/:id" element={<SingleProducts />}>
          {" "}
        </Route>
      </Routes>
    </div>

import { Box } from '@chakra-ui/react';
import './App.css';
import Cart from './pages/CartPage/Cart';
import CustomerInformation from './pages/PaymentPages/CustomerInformation';
import { PaymentPage } from './pages/PaymentPages/PaymentPage';
import ShippingMethod from './pages/PaymentPages/ShippingMethod';


function App() {
  return (
    <Box>
      {/* <Cart/>
      <CustomerInformation/>
      <ShippingMethod/> */}
      
      {/* <PaymentPage/> */}
    </Box>

  );
}

export default App;
