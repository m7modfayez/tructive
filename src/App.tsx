// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TotalDrivers from './assets/components/TotalDrivers';
import HomeApp from './assets/components/home-page-components/Home';
import Dashboard from './assets/components/Dashboard';

function App() {


  return (
    <>
    {/* <div className='dashboard'>
      
      <Router>
      <Header />
      <DashboardBody />
      <Footer />
        <Routes>
          <Route path="/total-drivers" element={<TotalDrivers />} />
        </Routes>
      </Router>
    </div> */}

    <Router>
        <Routes>
          <Route path='' element={<HomeApp />} />
          <Route path="/supervisor-dashborad" element={<Dashboard />} >
            <Route path="total-drivers" element={<TotalDrivers />} />
          </Route>
        </Routes>
    </Router>

    {/* <Dashboard /> */}
    </>
  )
}

export default App;
