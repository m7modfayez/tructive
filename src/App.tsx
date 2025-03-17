// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TotalDrivers from './assets/components/TotalDrivers';
import HomeApp from './assets/components/home-page-components/Home';
import LoginPage from './assets/components/login/Login';
import Dashboard from './assets/components/Dashboard';
import AdminDashboard from './assets/components/admin-dashboard/AdminDashboard';

function App() {


  return (
    <>
    

    <Router>
        <Routes>
          <Route path='' element={<HomeApp />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/admin-dashborad" element={<AdminDashboard />} />
          <Route path="/supervisor-dashborad" element={<Dashboard />} >
            <Route path="total-drivers" element={<TotalDrivers />} />
          </Route>
        </Routes>
    </Router>

    </>
  )
}

export default App;
