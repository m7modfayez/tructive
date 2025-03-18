import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DriverList from "./DriverList";

function TotalDrivers() {

    const navigate = useNavigate();
    const onClose = () => {
        navigate(-1);
    }

    return (
        <>
         
       <div className="total-drivers">
   
           
               <button onClick={onClose} className="close-driver-list"> <IoMdClose size={60} color="black" /> </button>
               <h1 style={{margin: "15px 42%"}}>Drivers List</h1>
               <DriverList />
        </div>

        </>
    )
}

export default TotalDrivers;