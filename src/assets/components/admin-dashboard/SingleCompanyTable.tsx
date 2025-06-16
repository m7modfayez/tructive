import Table from "../base-components/Table";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const supervisorsHeaders = [ "Supervisor ID", "Supervisor Name", "Phone" , "Email", "Address","Actions"];

const editIcon = <FaEdit size={20} style={{ cursor: "pointer", color: "#008ae6d6", margin: "0 15px" }}  />
const deleteIcon = <RiDeleteBin6Fill size={20} style={{ cursor: "pointer", color: "#ff0505d6", margin: "0 15px" }} />

const supervisors = [
    {
      id: 1,
      Fname: "m7mod",
      Lname: "ali",
      phone: 202000343,
      address: "123street",
      email: "7oda123@gmail.com",
    },
    {
      id: 2,
      Fname: "Ahmed Samir",
      Lname: "ali",
      phone: 201555882,
      address: "123street",
      email: "ahmed.samir@mail.com",
    },
    {
      id: 3,
      Fname: "Mona Ali",
      Lname: "ali",
      phone: 201333777,
      address: "123street",
      email: "mona.ali@mail.com",
    },
    {
      id: 4,
      Fname: "Khaled Nour",
      Lname: "ali",
      phone: 201222444,
      address: "123street",
      email: "khaled.nour@mail.com",
    },
    {
        id: 2,
        Fname: "Ahmed Samir",
        Lname: "ali",
        phone: 201555882,
      address: "123street",
        email: "ahmed.samir@mail.com",
    },
    {
        id: 1,
        Fname: "m7mod",
        Lname: "ali",
        phone: 202000343,
        address: "123street",
        email: "7oda123@gmail.com",
      },
    {
      id: 5,
      Fname: "Sara Tamer",
      Lname: "ali",
      phone: 201666999,
      address: "123street",
      email: "sara.tamer@mail.com",
    },
  ];


function SingleCompanyTable() {

    // const {name} = useParams();

    const navigate = useNavigate();
       
        
        const handleEdit = (id: number) => {
            console.log("Edit supervisor ID:", id);
            // navigate(`edit-supervisor/${id}`);
            navigate(`edit-supervisor/${id}`, { state: supervisors.find(supervisor => supervisor.id === id) });
            console.log("super data" ,supervisors.find(supervisor => supervisor.id === id));
          };
          
          const handleDelete = (id: number) => {
            console.log("Delete supervisor ID:", id);
          };
    
        const supervisorsData = supervisors.map((supervisor) => ({
            "Supervisor ID": supervisor.id,
            "Supervisor FName": supervisor.Fname,
            "Supervisor LName": supervisor.Lname,
            "Phone": supervisor.phone,
            "Email": supervisor.email,
            "Address": supervisor.address,
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