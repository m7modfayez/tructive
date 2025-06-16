import  { useEffect, useState } from "react";
import axios from "axios";
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

const editIcon = (
  <FaEdit
    size={20}
    style={{ cursor: "pointer", color: "#008ae6d6", margin: "0 15px" }}
  />
);
const deleteIcon = (
  <RiDeleteBin6Fill
    size={20}
    style={{ cursor: "pointer", color: "#ff0505d6", margin: "0 15px" }}
  />
);

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
        const res = await axios.get<Supervisor[]>(
          "https://trucktive.runasp.net/api/Supervisors",
          { params: { companyId: companyID } }
        );
        setSupervisors(res.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch supervisors.");
        console.error(err);
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

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this supervisor?");
    if (!confirmDelete) return;

    try {
      axios.delete(`https://trucktive.runasp.net/api/Supervisors/${id}`);
      setSupervisors((prev) => prev.filter((sup) => sup.id !== id));
      alert("Supervisor deleted successfully ✅");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete supervisor ❌");
    }

  };

  const supervisorsData = supervisors.map((sup) => ({
    "Supervisor ID": sup.id,
    "Supervisor Name": `${sup.fName} ${sup.lName}`,
    Phone: sup.phone,
    Email: sup.email,
    Address: sup.address,
    Actions: (
      <>
        <button onClick={() => handleEdit(sup.id)}>{editIcon}</button>
        <button onClick={() => handleDelete(sup.id)}>{deleteIcon}</button>
      </>
    ),
  }));

  if (loading) return <p>Loading supervisors...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Table
      headers={supervisorsHeaders}
      data={supervisorsData}
      className="companies-table"
    />
  );
}

export default SingleCompanyTable;
