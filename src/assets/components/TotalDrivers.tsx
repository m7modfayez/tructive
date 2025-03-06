import { useState } from "react";
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
   
           
             <div style={{display:"flex",}}>
               <h1>drivers list</h1>
               <button onClick={onClose} style={{marginLeft:"80%"}} >Close</button>
             </div>
               <DriverList />
        </div>

        </>
    )
}

export default TotalDrivers;