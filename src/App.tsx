// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import AddDriverModal from './assets/components/Driver-actions/AddDriverModal';
import DeleteDriver from './assets/components/Driver-actions/DeleteDriver';
import SelectDriverById from './assets/components/Driver-actions/SelectDriverById';
import EditDriverForm from './assets/components/Driver-actions/EditDriverForm';
import TotalVehicles from './assets/components/Vehicles/TotalVehicles';
import AddingVehicleWindow from './assets/components/Vehicles/AddVehicle';
import DeleteVehicle from './assets/components/Vehicles/DeleteVehicle';

function App() {


  return (
    <>

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
          <Route path="total-drivers" element={<TotalDrivers />}>
            <Route path="add-driver" element={<AddDriverModal />} />
            <Route path="delete-driver" element={<DeleteDriver />} />
          </Route>
          <Route path="add-driver" element={<AddDriverModal />} />
          <Route path="delete-driver" element={<DeleteDriver />} />
          <Route path="edit-driver" element={<SelectDriverById />} >
            <Route path=":id" element={<EditDriverForm />} />
          </Route>
          <Route path="vehicles-list" element={<TotalVehicles />}>
              <Route path="add-vehicle" element={<AddingVehicleWindow />} />
              <Route path="delete-vehicle" element={<DeleteVehicle />} />
          </Route>
          <Route path="add-vehicle" element={<AddingVehicleWindow />} />

        </Route>
      </Routes>
    </Router>
    <ToastContainer position="bottom-center" />

    </>
  )
}

export default App;
