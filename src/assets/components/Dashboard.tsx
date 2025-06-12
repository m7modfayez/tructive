// import { Outlet } from "react-router-dom";

// import Header from './Header'
// import NavBar from './NavBar'
// import DashboardBody from './DashboardBody'


// function Dashboard() {

//     return(
//         <>
//         <div className='dashboard'>

//         <Header role="Supervisor" />
//         <DashboardBody />
//         <Outlet />
//         <NavBar />

//         </div>
//         </>
//     )
// }

// export default Dashboard;


import { Outlet, useLocation } from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar';
import DashboardBody from './DashboardBody';
import DriverReportSelection from './Driver_Report/DriverReportSelection';

function Dashboard() {
  const location = useLocation();

  // عرض مودال DriverReportSelection لو المستخدم ضغط من NavBar
  const showSelectionOverlay = location.state?.showDriverReportSelection;

  // إخفاء الـ DashboardBody عند الذهاب إلى صفحة التقرير نفسها
  const hideDashboardBody = location.pathname.includes("driver-report");

  return (
    <div className='dashboard'>
      <Header role="Supervisor" />
      
      {!hideDashboardBody && <DashboardBody />}
      
      {showSelectionOverlay && <DriverReportSelection />}
      
      <Outlet />
      
      <NavBar />
    </div>
  );
}

export default Dashboard;


