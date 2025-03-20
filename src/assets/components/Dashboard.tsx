import { Outlet } from "react-router-dom";
import Header from './Header'
import NavBar from './NavBar'
import DashboardBody from './DashboardBody'


function Dashboard() {

    return(
        <>
        <div className='dashboard'>

        <Header />
        <DashboardBody />
        <Outlet />
        <NavBar />

        </div>
        </>
    )
}

export default Dashboard;