import AdminNav from "./AdminNav"
import Header from "../Header"
import AdminDashBody from "./AdminDashBody";
import { Outlet } from "react-router-dom";


function AdminDashboard() {


    return(
        <>
        <div>
          <Header role="Admin" />
          <AdminDashBody />
          <AdminNav />
          <Outlet />
          </div>
        </>
    )
}

export default AdminDashboard;