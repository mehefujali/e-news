import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import router from './Routes/Routes'
import AuthProvider from './Context/AuthProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      autoClose={900}
      hideProgressBar
      theme="colored"
    ></ToastContainer>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
