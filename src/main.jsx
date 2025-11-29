import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './APP.css'
import EmployeeDashboard from './EmployeeDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeDashboard />
  </StrictMode>,
)
