import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Header'
import NavBar from './NavBar'
import DashboardBody from './DashboardBody'
import { supervisorAPI } from '../services/api';
import { getLocalStorageItem, formatFullName, handleError } from '../utils/helpers';
import { STORAGE_KEYS } from '../utils/constants';

function Dashboard() {
    const supervisorID = getLocalStorageItem(STORAGE_KEYS.SUPERVISOR_ID);
    const companyId = getLocalStorageItem(STORAGE_KEYS.COMPANY_ID);
    const [supervisor, setSupervisor] = useState<string>("");
    
   useEffect(() => {
    const fetchSupervisor = async () => {
      if (!supervisorID || !companyId) return;
      
      try {
        const response = await supervisorAPI.getSupervisor(supervisorID, companyId);
        const supervisorName = formatFullName(response.data.fName, response.data.lName);
        setSupervisor(supervisorName);
      } catch (err) {
        console.error("Error fetching supervisor:", handleError(err));
      }
    };

    fetchSupervisor();
  }, [supervisorID, companyId]);



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
}


export default Dashboard;