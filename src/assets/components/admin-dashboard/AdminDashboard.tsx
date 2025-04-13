import AdminNav from "./AdminNav"
import Header from "../Header"
import { useNavigate } from "react-router-dom";
// import AdminDashBody from "./AdminDashBody";
import CompaniesInfo from "./CompaniesInfo";
import { Outlet } from "react-router-dom";


function AdminDashboard() {

  const navigate = useNavigate();
  const companyHandleOnClick = () => {
    navigate('')
  }

    return(
        <>
        <div>
          <Header role="Admin" />
          {/* <AdminDashBody /> */}
          <div className="dash-body">

        <CompaniesInfo onTotalCompaniesClick={companyHandleOnClick} />
        <Outlet />
        </div>
          <AdminNav />
          </div>
        </>
    )
}

export default AdminDashboard;