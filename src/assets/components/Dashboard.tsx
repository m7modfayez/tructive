import { Outlet } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import DashboardBody from './DashboardBody'


function Dashboard() {

    return(
        <>
        <div className='dashboard'>

        <Header />
        <DashboardBody />
        <Outlet />
        <Footer />

        </div>
        </>
    )
}

export default Dashboard;