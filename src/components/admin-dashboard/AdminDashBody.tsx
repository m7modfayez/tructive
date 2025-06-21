import CompaniesInfo from "./CompaniesInfo";
import { Outlet } from "react-router-dom";


function AdminDashBody() {

    const companyHandleOnClick = () => {

    }

    return(
        <>

        <div className="dash-body">

        <CompaniesInfo onTotalCompaniesClick={companyHandleOnClick} />

        <Outlet />
        </div>
        </>
    )
}

export default AdminDashBody;