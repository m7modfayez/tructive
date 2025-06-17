import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from './Header'
import NavBar from './NavBar'
import DashboardBody from './DashboardBody'


function Dashboard() {

    const supervisorID = localStorage.getItem("SupervisorId");
    const companyId = localStorage.getItem("companyId");
    const [supervisor, setSupervisor] = useState<string>("");

    console.log("supervisorID", supervisorID);
    console.log("company", companyId);
    
    
   useEffect(() => {
    const fetchDrivers = async () => {
    try {
      const response = await axios.get(`https://trucktive.runasp.net/api/Supervisors/${supervisorID}?companyId=${companyId}`);
      const supervisorName = response.data.fName + " " + response.data.lName;
      setSupervisor(supervisorName);
    } catch (err) {
      console.error("Error fetching supervisor:", err);
    }
   };

  fetchDrivers();
}, []);



    return(
        <>
        <div className='dashboard'>

        <Header role="Supervisor" userName={supervisor} />
        <DashboardBody />
        <Outlet />
        <NavBar />

        </div>
        </>
    )






//   const location = useLocation();

// const showSelectionOverlay = location.state?.showDriverReportSelection;
// const hideDashboardBody = location.pathname === "/supervisor-dashboard/driver-report";

// return (
//   <div className='dashboard'>
//     <Header role="Supervisor" userName={supervisor} />

//     {!hideDashboardBody && <DashboardBody />}

//     {showSelectionOverlay && <DriverReport />}

//     <Outlet />

//     <NavBar />
//   </div>
// );

}


export default Dashboard;