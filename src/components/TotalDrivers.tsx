import Closing from "./base-components/Closing";
import DriverList from "./DriverList";
import { Outlet } from "react-router-dom";

function TotalDrivers() {

    

    return (
        <>
         
       <div className="total-drivers">
   
           
               <Closing />
               <div style={{margin: "10px auto", width: "fit-content"}} > <h1 style={{margin: "0"}}>Drivers List</h1> </div>
               <DriverList />
               <Outlet />
        </div>

        </>
    )
}

export default TotalDrivers;