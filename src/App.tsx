// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import DashboardBody from './assets/components/DashboardBody'
import TotalDrivers from './assets/components/TotalDrivers';
function App() {


  return (
    <>
    <div className='dashboard'>
      
      <Router>
      <Header />
      <DashboardBody />
      <Footer />
        <Routes>
          <Route path="/total-drivers" element={<TotalDrivers />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
