import AdminNav from "./AdminNav"
import Header from "../Header"
import { useNavigate } from "react-router-dom";
import CompaniesInfo from "./CompaniesInfo";
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const companyHandleOnClick = () => {
    navigate('/admin-dashboard')
  }

  return (
    <div className="dashboard">
      <Header role="Admin" userName="Admin" />
      <div className="dashboard-body">
        <CompaniesInfo onTotalCompaniesClick={companyHandleOnClick} />
        <Outlet />
      </div>
      <AdminNav />
    </div>
  )
}

export default AdminDashboard;