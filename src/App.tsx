// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TotalDrivers from './components/TotalDrivers';
import HomeApp from './components/home-page-components/Home';
import LoginPage from './components/login/Login';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/admin-dashboard/AdminDashboard';
import AddingCompanyWindow from './components/admin-dashboard/Admin-Actions-on-companies/AddingCompanyWindow';
import EditCompanyWindow from './components/admin-dashboard/Admin-Actions-on-companies/EditCompany';
import AllCompaniesData from './components/admin-dashboard/AllCompaniesData';
import SingleCompanyData from './components/admin-dashboard/SingleCompanyData';
import AddingSupervisor from './components/admin-dashboard/Admin-Actions-on-supervisors/AddingSupervisor';
import EditSupervisor from './components/admin-dashboard/Admin-Actions-on-supervisors/EditSupervisor';
import AddDriverModal from './components/Driver-actions/AddDriverModal';
import DeleteDriver from './components/Driver-actions/DeleteDriver';
import SelectDriverById from './components/Driver-actions/SelectDriverById';
import EditDriverForm from './components/Driver-actions/EditDriverForm';
import TotalVehicles from './components/Vehicles/TotalVehicles';
import AddingVehicleWindow from './components/Vehicles/AddVehicle';
import DeleteVehicle from './components/Vehicles/DeleteVehicle';
import Messages from './components/admin-dashboard/Messages/Messages';
import VehicleCondition from './components/Vehicles/VehicleCondition';
import DriverReportSelection from './components/Driver-Report/DriverReportSelection';
import DriverReport from './components/Driver-Report/DriverReport';

function App() {

  return (
    <>

   <Router>
      <Routes>
        <Route path="" element={<HomeApp />} />
        <Route path="/login-page" element={<LoginPage />} />
        
        {/* Admin Dashboard with Nested Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="" element={<AllCompaniesData />} />
          <Route path= ":companyID/:name" element={<SingleCompanyData />} >
            <Route path='adding-supervisor' element={<AddingSupervisor />} />
            <Route path='edit-supervisor/:id' element={<EditSupervisor />} />
          </Route>
          
          <Route path="add-company" element={<AddingCompanyWindow />} />
          <Route path= "edit-company/:id" element={<EditCompanyWindow />} />
        </Route>

        <Route path="/messages" element={<Messages />} />

        {/* Supervisor Dashboard with Nested Route */}
        <Route path="/supervisor-dashboard" element={<Dashboard />}>
          <Route path="driver-report-selection" element={<DriverReportSelection />} />
          <Route path="driver-report-selection/driver-report" element={<DriverReport />} />
          

        
          <Route path="total-drivers" element={<TotalDrivers />}>
            <Route path="add-driver" element={<AddDriverModal />} />
            <Route path="delete-driver" element={<DeleteDriver />} />
          </Route>
          <Route path="add-driver" element={<AddDriverModal />} />
          <Route path="delete-driver" element={<DeleteDriver />} />
          <Route path="edit-driver" element={<SelectDriverById />} >
            <Route path=":id" element={<EditDriverForm />} />
          </Route>
          <Route path="vehicle-condition/:vehicleID" element={<VehicleCondition />} />
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
