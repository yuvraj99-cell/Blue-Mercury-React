import { Box } from '@chakra-ui/react';
import { Allroute } from './Allroute';
import './App.css';
import Cart from './pages/CartPage/Cart';
import CustomerInformation from './pages/PaymentPage/CustomerInformation';
import ShippingMethod from './pages/PaymentPage/ShippingMethod';


function App() {
  return (
    <Box>
      {/* <Cart/>
      <CustomerInformation/>
      <ShippingMethod/> */}
      <Allroute/>
    </Box>
  );
}

export default App;
