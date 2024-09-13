import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './pages/error/Error.jsx';
import Home from './pages/home/Home.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import Contact from './pages/contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "portfolio",
        element: <Portfolio/>,
      },
      {
        path: "contact/:contactId",
        element: <Contact/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)