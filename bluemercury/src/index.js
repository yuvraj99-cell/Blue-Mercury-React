import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';


import { Provider } from 'react-redux';
import { store } from './Redux/store';

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Provider store={store}>
    <ChakraProvider>
  <App></App>
  </ChakraProvider>
  </Provider>
  </BrowserRouter>


);


reportWebVitals();
