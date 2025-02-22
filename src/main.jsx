import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import {Provider} from 'react-redux'
import { store } from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
    <Provider store={store}>
				<App />
			</Provider>
    </ChakraProvider>
  </BrowserRouter>,
)
