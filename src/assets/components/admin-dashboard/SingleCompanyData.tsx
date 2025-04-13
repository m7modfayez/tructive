import SingleCompanyTable from "./SingleCompanyTable";
import ComapnyName from "../base-components/CompanyName";
import BaseButton from "../base-components/BaseButton";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function SingleCompanyData() {

    const {name} = useParams();
   const navigate = useNavigate();

    const addSupervisorOnclick = () => {
        console.log("adding supervisor");
        navigate(`adding-supervisor`);
    }

    return(
        <>
        <ComapnyName companyName={name} />
        <SingleCompanyTable />
        <div style={{ margin: "10px auto 0px auto", backgroundColor: "", width: "fit-content" }}>
        <BaseButton name="Add Supervisor" className="admin-adding-button" baseButtonOnClick={addSupervisorOnclick} />
        <Outlet />
        </div>
        </>
    )
}
export default SingleCompanyData;