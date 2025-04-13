// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TotalDrivers from './assets/components/TotalDrivers';
import HomeApp from './assets/components/home-page-components/Home';
import LoginPage from './assets/components/login/Login';
import Dashboard from './assets/components/Dashboard';
import AdminDashboard from './assets/components/admin-dashboard/AdminDashboard';
import AddingCompanyWindow from './assets/components/admin-dashboard/Admin-Actions-on-companies/AddingCompanyWindow';
import EditCompanyWindow from './assets/components/admin-dashboard/Admin-Actions-on-companies/EditCompany';
import AllCompaniesData from './assets/components/admin-dashboard/AllCompaniesData';
import SingleCompanyData from './assets/components/admin-dashboard/SingleCompanyData';
import AddingSupervisor from './assets/components/admin-dashboard/Admin-Actions-on-supervisors/AddingSupervisor';
import EditSupervisor from './assets/components/admin-dashboard/Admin-Actions-on-supervisors/EditSupervisor';

function App() {


  return (
    <>
    

    {/* <Router>
        <Routes>
          <Route path='' element={<HomeApp />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/admin-dashborad" element={<AdminDashboard />}>
            <Route path="add-company" element={<BaseActionsWindow />} />
          </Route>
          <Route path="/supervisor-dashborad" element={<Dashboard />} >
            <Route path="total-drivers" element={<TotalDrivers />} />
          </Route>
        </Routes>
    </Router> */}

   <Router>
      <Routes>
        <Route path="" element={<HomeApp />} />
        <Route path="/login-page" element={<LoginPage />} />
        
        {/* Admin Dashboard with Nested Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          {/* <Route path="add-company" element={<BaseFormWindow />} />  */}
          <Route path="" element={<AllCompaniesData />} />

          <Route path=":name" element={<SingleCompanyData />} >
            <Route path='adding-supervisor' element={<AddingSupervisor />} />
            <Route path='edit-supervisor/:id' element={<EditSupervisor />} />
          </Route>
          
          <Route path="add-company" element={<AddingCompanyWindow />} />
          <Route path= "edit-company/:id" element={<EditCompanyWindow />} />
        </Route>

        {/* Supervisor Dashboard with Nested Route */}
        <Route path="/supervisor-dashboard" element={<Dashboard />}>
          <Route path="total-drivers" element={<TotalDrivers />} />
        </Route>
      </Routes>
    </Router>

    </>
  )
}

export default App;
