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
<<<<<<< HEAD
    
    <App />
    
=======

  <BrowserRouter>
  <ChakraProvider>
  
    <App />
  
  </ChakraProvider>
  </BrowserRouter>

<ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </ChakraProvider>


>>>>>>> main
);


reportWebVitals();
