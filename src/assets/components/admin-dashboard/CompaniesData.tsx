import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

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

function CompaniesData() {
  const navigate = useNavigate();

  const editIcon = <FaEdit size={20} style={{ cursor: "pointer", color: "#008ae6d6", margin: "0 15px" }} />;
  const deleteIcon = <RiDeleteBin6Fill size={20} style={{ cursor: "pointer", color: "#ff0505d6", margin: "0 15px" }} />;

  const handleEdit = (id: number) => {
    console.log("Edit company ID:", id);
    navigate("/edit-company");
  };

  const handleDelete = (id: number) => {
    console.log("Delete company ID:", id);
  };

  const companiesData = companies.map((company) => ({
    "Company ID": company.id,
    "Company Name": company.name,
    "Total Supervisors": company.totalSupervisors,
    "Total Drivers": company.totalDrivers,
    "Contract Date": company.contractDate,
    "Actions": (
      <>
        <button onClick={() => handleEdit(company.id)}>{editIcon}</button>
        <button onClick={() => handleDelete(company.id)}>{deleteIcon}</button>
      </>
    ),
  }));

  return (
    <>
      {/* Render however you'd like */}
      {JSON.stringify(companiesData)}
    </>
  );
}

export default CompaniesData;