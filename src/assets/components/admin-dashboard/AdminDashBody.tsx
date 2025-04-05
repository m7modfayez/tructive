import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
// import ComapnyName from "../base-components/CompanyName";
import CompaniesInfo from "./CompaniesInfo";
import Table from "../base-components/Table";
import BaseButton from "../base-components/BaseButton";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


const companiesHeaders = [ "Company ID", "Company Name", "Total Supervisors" , "Total Drivers", "Contract Date", "Actions"];

const editIcon = <FaEdit size={20} style={{ cursor: "pointer", color: "#008ae6d6", margin: "0 15px" }}  />
const deleteIcon = <RiDeleteBin6Fill size={20} style={{ cursor: "pointer", color: "#ff0505d6", margin: "0 15px" }} />

// const navigateEditCompany = useNavigate();



// const companiesData = [
//         {
//           "Company ID": 1,
//           "Company Name": "Johayna",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 2,
//           "Company Name": "Nestle",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 3,
//           "Company Name": "PepsiCo",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 4,
//           "Company Name": "Coca-Cola",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 5,
//           "Company Name": "DHL Logistics",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 6,
//           "Company Name": "Amazon Delivery",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 7,
//           "Company Name": "Aramex",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 8,
//           "Company Name": "FedEx",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 9,
//           "Company Name": "Nestle",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 10,
//           "Company Name": "Amazon Delivery",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 11,
//           "Company Name": "Nestle",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 8,
//           "Company Name": "FedEx",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//         {
//           "Company ID": 8,
//           "Company Name": "Amazon Delivery",
//           "Total Supervisors": Math.floor(Math.random() * 10) + 1,
//           "Total Drivers": Math.floor(Math.random() * 50) + 5,
//           "Contract Date": Math.floor(Math.random() * 30) + 1,
//           "Actions": (
//             <>
//               {editIcon}
//               {deleteIcon}
//             </>
//           ),
//         },
//       ];

const companies = [
  {
    id: 1,
    name: "Johayna",
    totalSupervisors: 6,
    totalDrivers: 32,
    contractDate: "2023-05-12",
  },
  {
    id: 2,
    name: "Nestle",
    totalSupervisors: 4,
    totalDrivers: 27,
    contractDate: "2022-09-03",
  },
  {
    id: 3,
    name: "PepsiCo",
    totalSupervisors: 8,
    totalDrivers: 41,
    contractDate: "2024-01-18",
  },
  {
    id: 4,
    name: "Coca-Cola",
    totalSupervisors: 5,
    totalDrivers: 38,
    contractDate: "2023-08-25",
  },
  {
    id: 5,
    name: "DHL Logistics",
    totalSupervisors: 7,
    totalDrivers: 49,
    contractDate: "2022-12-10",
  },
  {
    id: 6,
    name: "Amazon Delivery",
    totalSupervisors: 9,
    totalDrivers: 44,
    contractDate: "2023-10-05",
  },
  {
    id: 7,
    name: "Aramex",
    totalSupervisors: 6,
    totalDrivers: 36,
    contractDate: "2024-02-14",
  },
  {
    id: 8,
    name: "FedEx",
    totalSupervisors: 3,
    totalDrivers: 28,
    contractDate: "2022-11-07",
  },
  {
    id: 9,
    name: "Nestle",
    totalSupervisors: 5,
    totalDrivers: 33,
    contractDate: "2023-04-22",
  },
  {
    id: 10,
    name: "Amazon Delivery",
    totalSupervisors: 8,
    totalDrivers: 47,
    contractDate: "2024-03-29",
  },
  {
    id: 11,
    name: "Nestle",
    totalSupervisors: 4,
    totalDrivers: 30,
    contractDate: "2023-06-15",
  },
  {
    id: 12,
    name: "FedEx",
    totalSupervisors: 2,
    totalDrivers: 22,
    contractDate: "2022-08-19",
  },
  {
    id: 13,
    name: "Amazon Delivery",
    totalSupervisors: 7,
    totalDrivers: 35,
    contractDate: "2023-07-08",
  },
];





  

function AdminDashBody() {

    const companyHandleOnClick = () => {

    }

    const navigate = useNavigate();

    const addCompanyOnClick = () => {
      navigate("add-company");
    }


    const handleEdit = (id: number) => {
      console.log("Edit company ID:", id);
      navigate(`edit-company/${id}`);
    };
    
    const handleDelete = (id: number) => {
      console.log("Delete company ID:", id);
    };

    const companiesData = companies.map((company) => ({
      "Company ID": company.id,
      "Company Name": company.name,
      "Total Supervisors": Math.floor(Math.random() * 10) + 1,
      "Total Drivers": Math.floor(Math.random() * 50) + 5,
      "Contract Date": Math.floor(Math.random() * 30) + 1,
      "Actions": (
        <>
          <button onClick={() => handleEdit(company.id)}>{editIcon}</button>
          <button onClick={() => handleDelete(company.id)}>{deleteIcon}</button>
        </>
      ),
    }));

    return(
        <>

        <div className="dash-body">

        {/* <div style={{marginLeft: '20%', color:'#3D9FEE' }}>
                <h1>Company Name</h1>
        </div> */}

        <CompaniesInfo onTotalCompaniesClick={companyHandleOnClick} />

        <Table headers={companiesHeaders} data={companiesData} className="companies-table" />
        <div style={{ margin: "10px auto 0px auto", backgroundColor: "", width: "fit-content" }}>
        <BaseButton name="Add Company" className="admin-adding-button" baseButtonOnClick={addCompanyOnClick} />
        </div>

        <Outlet />
        </div>
        {/* <DriverTable /> */}
        </>
    )
}

export default AdminDashBody