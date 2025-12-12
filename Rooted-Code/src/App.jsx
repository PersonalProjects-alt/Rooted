import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import HomePage from './HomePage.jsx'
import ProdutcsPage from './ProductsPage.jsx' 

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'products'

  return (
    <div>
      <Navbar onNavigate={setCurrentPage} />

      <div>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'products' && <ProdutcsPage />}
      </div>
    </div>
  )
}

export default App
