import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import ComapnyName from "../base-components/CompanyName";
import CompaniesInfo from "./CompaniesInfo";
import Table from "../base-components/Table";
import DriverInfo from "../DriverInfo";
import BaseButton from "../base-components/BaseButton";

import DriverTable from "../DriverTable";


const companiesHeaders = [ "Company ID", "Company Name", "Total Supervisors" , "Total Drivers", "Contract Date", "Actions"];

const editIcon = <FaEdit size={20} style={{ cursor: "pointer", color: "#008ae6d6", margin: "0 15px" }}  />
const deleteIcon = <RiDeleteBin6Fill size={20} style={{ cursor: "pointer", color: "#ff0505d6", margin: "0 15px" }} />



const companiesData = [
        {
          "Company ID": 1,
          "Company Name": "Johayna",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 2,
          "Company Name": "Nestle",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 3,
          "Company Name": "PepsiCo",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 4,
          "Company Name": "Coca-Cola",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 5,
          "Company Name": "DHL Logistics",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 6,
          "Company Name": "Amazon Delivery",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 7,
          "Company Name": "Aramex",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 8,
          "Company Name": "FedEx",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 9,
          "Company Name": "Nestle",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 10,
          "Company Name": "Amazon Delivery",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 11,
          "Company Name": "Nestle",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 8,
          "Company Name": "FedEx",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
        {
          "Company ID": 8,
          "Company Name": "Amazon Delivery",
          "Total Supervisors": Math.floor(Math.random() * 10) + 1,
          "Total Drivers": Math.floor(Math.random() * 50) + 5,
          "Contract Date": Math.floor(Math.random() * 30) + 1,
          "Actions": (
            <>
              {editIcon}
              {deleteIcon}
            </>
          ),
        },
      ];
  

function AdminDashBody() {

    const companyHandleOnClick = () => {

    }

    const addCompanyOnClick = () => {

    }

    return(
        <>

        <div className="dash-body">

        {/* <div style={{marginLeft: '20%', color:'#3D9FEE' }}>
                <h1>Company Name</h1>
        </div> */}

        {/* company name */}
        <div style={{ width: "fit-content", margin: "-30px auto 0"}}>
           <ComapnyName companyName="Johayna" />
        </div>

        {/* <DriverInfo onChildClick={companyHandleOnClick} /> */}
        
        <CompaniesInfo onTotalCompaniesClick={companyHandleOnClick} />

        <Table headers={companiesHeaders} data={companiesData} className="companies-table" />
        <div style={{ margin: "10px auto 0px auto", backgroundColor: "", width: "fit-content" }}>
        <BaseButton name="Add Company" className="admin-addCompany-button" baseButtonOnClick={addCompanyOnClick} />
        </div>
        </div>
        {/* <DriverTable /> */}
        </>
    )
}

export default AdminDashBody