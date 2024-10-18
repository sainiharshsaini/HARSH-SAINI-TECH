import ThemeProvider from "../contexts/ThemeContext"
import { Outlet } from "react-router-dom"

import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = () => {
    return (
        <ThemeProvider>
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}

export default Layout