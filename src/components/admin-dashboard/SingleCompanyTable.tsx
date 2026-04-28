import  { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "../base-components/Table";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const supervisorsHeaders = [
  "Supervisor ID",
  "Supervisor Name",
  "Phone",
  "Email",
  "Address",
  "Actions",
];

const EditIcon = FaEdit;
const DeleteIcon = RiDeleteBin6Fill;

interface Supervisor {
  id: number;
  fName: string;
  lName: string;
  phone: string;
  address: string;
  email: string;
  companyId: number;
}

function SingleCompanyTable() {
  const { companyID } = useParams();          
  const navigate = useNavigate();

  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!companyID) return;

    const fetchSupervisors = async () => {
      try {
        console.log("Fetching supervisors for company ID:", companyID);
        const res = await axios.get<Supervisor[]>(
          "https://trucktive.runasp.net/api/Supervisors",
          { params: { companyId: companyID } }
        );
        console.log("Supervisors response:", res.data);
        setSupervisors(res.data);
        setError("");
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to fetch supervisors.";
        setError(errorMessage);
        console.error("Error fetching supervisors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSupervisors();
  }, [companyID]);

  const handleEdit = (id: number) => {
    const sup = supervisors.find((s) => s.id === id);
    navigate(`edit-supervisor/${id}`, { state: sup });
  };

  const handleDelete = async (id: number) => {
    console.log("Delete supervisor function called with ID:", id);
    console.log("Current supervisors list:", supervisors);
    
    const supervisor = supervisors.find((s) => s.id === id);
    if (!supervisor) {
      console.log("Supervisor not found for ID:", id);
      toast.error("Supervisor not found");
      return;
    }
    
    console.log("Supervisor found:", supervisor);
    const confirmDelete = window.confirm(`Are you sure you want to delete "${supervisor.fName} ${supervisor.lName}"? This action cannot be undone.`);
    console.log("User confirmation:", confirmDelete);
    
    if (!confirmDelete) {
      console.log("User cancelled delete");
      return;
    }
    
    console.log("Proceeding with delete for supervisor ID:", id);
    try {
      const response = await axios.delete(`https://trucktive.runasp.net/api/Supervisors/${id}`);
      console.log("Delete response:", response);
      
      // Update local state
      setSupervisors((prevSupervisors: any[]) => {
        const newList = prevSupervisors.filter((sup) => sup.id !== id);
        console.log("New supervisors list:", newList);
        return newList;
      });
      
      // Show success message
      toast.success(`Supervisor "${supervisor.fName} ${supervisor.lName}" deleted successfully!`);
    } catch (error: any) {
      console.error("Error deleting supervisor:", error);
      
      // Show specific error message
      const errorMessage = error.response?.data?.message || error.message || "Failed to delete the supervisor";
      toast.error(errorMessage);
    }

  };

  const supervisorsData = supervisors.map((sup) => {
        const actions = (
          <div className="table-actions" onClick={(e) => e.stopPropagation()} >
            <button 
              onClick={() => handleEdit(sup.id)} 
              className="btn btn-sm btn-outline"
              title="Edit Supervisor"
            >
              <span style={{ fontSize: '14px' }}><EditIcon /></span>
            </button>
            <button 
              onClick={() => handleDelete(sup.id)} 
              className="btn btn-sm btn-danger"
              title="Delete Supervisor"
            >
              <span style={{ fontSize: '14px' }}><DeleteIcon /></span>
            </button>
          </div>
        );
        
        return {
            "Supervisor ID": sup.id,
            "Supervisor Name": `${sup.fName} ${sup.lName}`,
            Phone: sup.phone,
            Email: sup.email,
            Address: sup.address,
            Actions: actions,
            // Add supervisor object for click handling
            _supervisor: sup
        };
    });

  if (loading) return (
    <div className="loading">
      <div className="spinner"></div>
      <span>Loading supervisors...</span>
    </div>
  );
  if (error) return <div className="alert alert-danger">{error}</div>;

  const onSupervisorClick = (row: any) => {
        // Get the hidden supervisor object from the row data
        const supervisor = row._supervisor;
        if (supervisor) {
            // Navigate to supervisor details page with supervisor data
            console.log("Supervisor clicked:", supervisor);
            // You can add navigation logic here if needed
        }
    };

  return (
    <div className="table-container">
      <Table
        headers={supervisorsHeaders}
        data={supervisorsData}
        onRowClick={onSupervisorClick}
      />
    </div>
  );
}

export default SingleCompanyTable;
