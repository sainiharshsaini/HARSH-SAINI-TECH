import './App.css'
import { Outlet } from 'react-router-dom'

import Footer from './footer/Footer'
import Header from './header/Header'

import ThemeProvider from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App