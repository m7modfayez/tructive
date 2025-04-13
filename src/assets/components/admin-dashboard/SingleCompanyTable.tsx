import Table from "../base-components/Table";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const supervisorsHeaders = [ "Supervisor ID", "Supervisor Name", "Phone" , "Email", "Actions"];

const editIcon = <FaEdit size={20} style={{ cursor: "pointer", color: "#008ae6d6", margin: "0 15px" }}  />
const deleteIcon = <RiDeleteBin6Fill size={20} style={{ cursor: "pointer", color: "#ff0505d6", margin: "0 15px" }} />

const supervisors = [
    {
      id: 1,
      name: "m7mod",
      phone: 202000343,
      email: "7oda123@gmail.com",
    },
    {
      id: 2,
      name: "Ahmed Samir",
      phone: 201555882,
      email: "ahmed.samir@mail.com",
    },
    {
      id: 3,
      name: "Mona Ali",
      phone: 201333777,
      email: "mona.ali@mail.com",
    },
    {
      id: 4,
      name: "Khaled Nour",
      phone: 201222444,
      email: "khaled.nour@mail.com",
    },
    {
        id: 2,
        name: "Ahmed Samir",
        phone: 201555882,
        email: "ahmed.samir@mail.com",
    },
    {
        id: 1,
        name: "m7mod",
        phone: 202000343,
        email: "7oda123@gmail.com",
      },
    {
      id: 5,
      name: "Sara Tamer",
      phone: 201666999,
      email: "sara.tamer@mail.com",
    },
  ];


function SingleCompanyTable() {

    const {name} = useParams();

    const navigate = useNavigate();
       
        
        const handleEdit = (id: number) => {
            console.log("Edit supervisor ID:", id);
            navigate(`edit-supervisor/${id}`);
          };
          
          const handleDelete = (id: number) => {
            console.log("Delete supervisor ID:", id);
          };
    
        const supervisorsData = supervisors.map((supervisor) => ({
            "Supervisor ID": supervisor.id,
            "Supervisor Name": supervisor.name,
            "Phone": supervisor.phone,
            "Email": supervisor.email,
            "Actions": (
              <>
                <button onClick={() => handleEdit(supervisor.id)}>{editIcon}</button>
                <button onClick={() => handleDelete(supervisor.id)}>{deleteIcon}</button>
              </>
            ),
          }));


    return(
        <>
         <Table headers={supervisorsHeaders} data={supervisorsData} className="companies-table" />
        </>
    )
}
export default SingleCompanyTable;