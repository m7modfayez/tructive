import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Table from "../base-components/Table"

const companiesHeaders = [ "Company ID", "Company Name", "Phone", "email", "Total Supervisors" , "Total Drivers", "Contract Date", "Actions"];

const EditIcon = () => (
  <FaEdit size={18} className="edit-icon" />
);

const DeleteIcon = () => (
  <RiDeleteBin6Fill size={18} className="delete-icon" />
);

// const companies = [
//     {
//       id: 1,
//       name: "Johayna",
//       totalSupervisors: 6,
//       totalDrivers: 32,
//       contractDate: "2023-05-12",
//     },
//     {
//       id: 2,
//       name: "Nestle",
//       totalSupervisors: 4,
//       totalDrivers: 27,
//       contractDate: "2022-09-03",
//     },
//     {
//       id: 3,
//       name: "PepsiCo",
//       totalSupervisors: 8,
//       totalDrivers: 41,
//       contractDate: "2024-01-18",
//     },
//     {
//       id: 4,
//       name: "Coca-Cola",
//       totalSupervisors: 5,
//       totalDrivers: 38,
//       contractDate: "2023-08-25",
//     },
//     {
//       id: 5,
//       name: "DHL Logistics",
//       totalSupervisors: 7,
//       totalDrivers: 49,
//       contractDate: "2022-12-10",
//     },
//     {
//       id: 6,
//       name: "Amazon Delivery",
//       totalSupervisors: 9,
//       totalDrivers: 44,
//       contractDate: "2023-10-05",
//     },
//     {
//       id: 7,
//       name: "Aramex",
//       totalSupervisors: 6,
//       totalDrivers: 36,
//       contractDate: "2024-02-14",
//     },
//     {
//       id: 8,
//       name: "FedEx",
//       totalSupervisors: 3,
//       totalDrivers: 28,
//       contractDate: "2022-11-07",
//     },
//     {
//       id: 9,
//       name: "Nestle",
//       totalSupervisors: 5,
//       totalDrivers: 33,
//       contractDate: "2023-04-22",
//     },
//     {
//       id: 10,
//       name: "Amazon Delivery",
//       totalSupervisors: 8,
//       totalDrivers: 47,
//       contractDate: "2024-03-29",
//     },
//     {
//       id: 11,
//       name: "Nestle",
//       totalSupervisors: 4,
//       totalDrivers: 30,
//       contractDate: "2023-06-15",
//     },
//     {
//       id: 12,
//       name: "FedEx",
//       totalSupervisors: 2,
//       totalDrivers: 22,
//       contractDate: "2022-08-19",
//     },
//     {
//       id: 13,
//       name: "Amazon Delivery",
//       totalSupervisors: 7,
//       totalDrivers: 35,
//       contractDate: "2023-07-08",
//     },
//   ];
  
function AdminCompaniesTable() {

   const [companiesList, setCompaniesList] = useState<any>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

     useEffect(() => {
          const fetchCompanies = async () => {
             try {
                console.log("Fetching companies...");
                const response = await axios.get("https://trucktive.runasp.net/api/Companies");
                console.log("Companies response:", response.data);
                setCompaniesList(response.data);
                setError(null);
                setLoading(false);
             } catch (err: any) {
                console.error("Error fetching companies:", err);
                const errorMessage = err.response?.data?.message || err.message || "Failed to fetch companies";
                setError(errorMessage);
                setLoading(false);
             }
          };
    
          fetchCompanies();
       }, []);
    
       if (loading) return <div style={{ marginTop:"20px" }}>Loading...</div>;
       if (error) return <div style={{ color: "red", marginTop:"20px" }}>{error}</div>;
       ///////

    const onCompanyClick = (row: any) => {
        // Get the hidden company object from the row data
        const company = row._company;
        if (company) {
            // Navigate to company details page with company data
            navigate(`${company.id}/${company.name}`, { 
                state: company 
            });
        }
    };
    
    const handleEdit = (id: any) => {
        console.log("Edit company ID:", id);
         const company = companiesList.find((company: any) => company.id === id);
         navigate(`edit-company/${id}`, { state: company });
    };

    const handleDelete = async (id: number) => {
       console.log("Delete function called with ID:", id);
       console.log("Current companiesList:", companiesList);
       
       const company = companiesList.find((c: any) => c.id === id);
       if (!company) {
         console.log("Company not found for ID:", id);
         toast.error("Company not found");
         return;
       }
       
       console.log("Company found:", company);
       const confirmDelete = window.confirm(`Are you sure you want to delete "${company.name}"? This action cannot be undone.`);
       console.log("User confirmation:", confirmDelete);
       
       if (!confirmDelete) {
         console.log("User cancelled delete");
         return;
       }
       
       console.log("Proceeding with delete for company ID:", id);
       try {
         const response = await axios.delete(`https://trucktive.runasp.net/api/Companies/${id}`);
         console.log("Delete response:", response);
         
         // Update local state
         setCompaniesList((prevCompanies: any[]) => {
           const newList = prevCompanies.filter((company: any) => company.id !== id);
           console.log("New companies list:", newList);
           return newList;
         });
         
         // Show success message
         toast.success(`Company "${company.name}" deleted successfully!`);
       } catch (error: any) {
         console.error("Error deleting company:", error);
         
         // Show specific error message
         const errorMessage = error.response?.data?.message || error.message || "Failed to delete the company";
         toast.error(errorMessage);
       }
    };

    const companiesData = companiesList.map((company:any) => {
        const actions = (
          <div className="table-actions" onClick={(e) => e.stopPropagation()} >
            <button 
              onClick={() => handleEdit(company.id)} 
              className="btn btn-sm btn-outline"
              title="Edit Company"
            >
              <span style={{ fontSize: '14px' }}><EditIcon /></span>
            </button>
            <button 
              onClick={() => handleDelete(company.id)} 
              className="btn btn-sm btn-danger"
              title="Delete Company"
            >
              <span style={{ fontSize: '14px' }}><DeleteIcon /></span>
            </button>
          </div>
        );
        
        return {
            "Company ID": company.id,
            "Company Name": company.name,
            "Phone": company.phone,
            "email": company.email,
            "Total Supervisors": company.supervisorsCount,
            "Total Drivers": company.driversCount,
            "Contract Date": company.contractDate,
            "Actions": actions,
            // Add company object for click handling
            _company: company
        };
    });


    return(
        <div className="page-content">
            <div className="table-header">
                <h2 className="table-title">Companies Management</h2>
                <div className="table-actions">
                    <button 
                        className="btn btn-primary"
                        onClick={() => navigate('add-company')}
                    >
                        + Add Company
                    </button>
                </div>
            </div>
            
            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <span>Loading companies...</span>
                </div>
            ) : error ? (
                <div className="alert alert-danger">{error}</div>
            ) : (
                <div className="table-container">
                    <Table 
                        headers={companiesHeaders} 
                        data={companiesData} 
                        onRowClick={onCompanyClick} 
                    />
                </div>
            )}
        </div>
    )
}
export default AdminCompaniesTable;