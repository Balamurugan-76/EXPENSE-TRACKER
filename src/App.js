import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import Expenses from './Expenses'
import Report from './Report'
import Footer from './Footer'

import './App.css'

function App () {
  const [transactions,setTransactions] = useState([]);

  return(
    <BrowserRouter>
    <Header />
    <div className='container' >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard transactions={transactions} />} />
      <Route path="/expenses" element={<Expenses transactions={transactions} setTransactions={setTransactions} />} />
      <Route path="/report" element={<Report transactions={transactions} />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App