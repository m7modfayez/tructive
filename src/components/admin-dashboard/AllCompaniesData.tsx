import BaseButton from "../base-components/BaseButton";
import { useNavigate } from "react-router-dom";
import AdminCompaniesTable from "./AdminCompaniesTable";
// import SingleCompanyTable from "./SingleCompanyTable";


function AllCompaniesData() {

    const navigate = useNavigate();
    

    const addCompanyOnClick = () => {
      navigate("add-company");
    }


    return(
        <>
        <AdminCompaniesTable />
        <div style={{ margin: "10px auto 0px auto", backgroundColor: "", width: "fit-content" }}>
        <BaseButton name="Add Company" className="admin-adding-button" baseButtonOnClick={addCompanyOnClick} />
        </div>

        </>
    )
}
export default AllCompaniesData;