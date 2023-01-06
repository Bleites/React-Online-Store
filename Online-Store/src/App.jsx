import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Product from './components/pages/Product'
import ProductList from './components/pages/ProductList'

import ShippPub from './components/layout/ShippPub'
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <Router>
      <ShippPub />
      <NavBar />
        <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/product" element={<Product />} />
              <Route path="/productlist" element={<ProductList />} />
              {/* <Route path="/newproject" element={<NewProject />} />
              <Route path="/project/:id" element={<Project />} /> */}
        </Routes>
        {/* <Footer /> */}
    </Router>
  )
}

export default App
