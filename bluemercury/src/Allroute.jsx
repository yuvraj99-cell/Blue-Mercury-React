import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/CartPage/Cart'
import CustomerInformation from './pages/PaymentPage/CustomerInformation'
import ShippingMethod from './pages/PaymentPage/ShippingMethod'

export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Cart/>}></Route>
            <Route path='/contact' element={<CustomerInformation/>}></Route>
            <Route path='/shipping' element={<ShippingMethod/>}></Route>
        </Routes>
    </div>
  )
}
