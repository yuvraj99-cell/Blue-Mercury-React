import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/CartPage/Cart'
import CustomerInformation from './pages/PaymentPages/CustomerInformation'
import { PaymentPage } from './pages/PaymentPages/PaymentPage'
import ShippingMethod from './pages/PaymentPages/ShippingMethod'

export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Cart/>}></Route>
            <Route path='/contact' element={<CustomerInformation/>}></Route>
            <Route path='/shipping' element={<ShippingMethod/>}></Route>
            <Route path='/payment' element={<PaymentPage/>}></Route>
        </Routes>
    </div>
  )
}
