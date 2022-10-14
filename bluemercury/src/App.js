import { Box } from '@chakra-ui/react';
import { Allroute } from './Allroute';
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
      <Allroute/>
      {/* <PaymentPage/> */}
    </Box>
  );
}

export default App;
