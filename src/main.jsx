import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App as Kit,Helloworld as Pit} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kit />
  </StrictMode>,
)
