import AdminNav from "./AdminNav"
import Header from "../Header"
import AdminDashBody from "./AdminDashBody";

function AdminDashboard() {


    return(
        <>
          <Header role="Admin" />
          <AdminDashBody />
          <AdminNav />
        </>
    )
}

export default AdminDashboard;