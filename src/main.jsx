import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App as Kit,Helloworld as Pit,Propconcept} from './App.jsx'
import Demo from './UserDestructuringProbs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kit />    
  </StrictMode>,
)
