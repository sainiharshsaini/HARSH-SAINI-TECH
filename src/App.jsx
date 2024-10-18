import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorPage from './pages/Error/ErrorPage'
import Layout from './pages/Layout'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="contact/:contactId" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App