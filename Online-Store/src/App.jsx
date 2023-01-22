import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Product from './components/pages/Product'
import ProductList from './components/pages/ProductList'
import Login from './components/pages/Login'

import ShippPub from './components/layout/ShippPub'
import NavBar from './components/layout/NavBar'
import Journal from './components/pages/Journal'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <ShippPub />
      <NavBar />
        <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/product/:id" element={<Product />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/newproject" element={<NewProject />} />
              <Route path="/project/:id" element={<Project />} /> */}
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
