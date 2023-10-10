import { useState } from 'react'
import { NavbarDefault } from './Components/Navbar'
import './App.css'
import { TransactionProvider } from './Context/TransactionContext'

import Home from './Pages/Home'

function App() {

  return (
    <div className='bg-gray-100 py-5 App'>
      <TransactionProvider>
          <NavbarDefault />
          <Home />
      </TransactionProvider>
    </div>
  )
}

export default App
