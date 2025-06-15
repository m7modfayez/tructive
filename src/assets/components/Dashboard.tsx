import { Outlet } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Header'
import NavBar from './NavBar'
import DashboardBody from './DashboardBody'
import DriverReport from "./Driver-Report/DriverReport";


function Dashboard() {

    // const supervisor = localStorage.getItem("userId");
      const [supervisor, setSupervisor] = useState<string>("");


    
    
    useEffect(() => {
          const fetchDrivers = async () => {
             try {
                const response = await axios.get("https://trucktive.runasp.net/api/Supervisors");
                const supervisorName = response.data[0].fName+" "+response.data[0].lName;
                setSupervisor(supervisorName);
               
             } catch (err) {
                console.error("Error fetching drivers:", err);
             }
          };
    
          fetchDrivers();
       }, []);


       

   //  return(
   //      <>
   //      <div className='dashboard'>

   //      <Header role="Supervisor" userName={supervisor} />
   //      <DashboardBody />
   //      <Outlet />
   //      <NavBar />

   //      </div>
   //      </>
   //  )






  const location = useLocation();

  const showSelectionOverlay = location.state?.showDriverReportSelection;

  const hideDashboardBody = location.pathname.includes("driver-report");

  return (
    <div className='dashboard'>
      <Header role="Supervisor" userName={supervisor} />
      
      {!hideDashboardBody && <DashboardBody />}
      
      {showSelectionOverlay && <DriverReport />}
      
      <Outlet />
      
      <NavBar />
    </div>
  );
}


export default Dashboard;