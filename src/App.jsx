import './App.css'
import { Outlet } from 'react-router-dom'

import Footer from './footer/Footer'
import Header from './header/Header'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App