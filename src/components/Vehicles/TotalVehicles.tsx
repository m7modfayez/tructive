import { Outlet } from "react-router-dom";
import Closing from "../base-components/Closing";
import VehiclesList from "./VehiclesList";

function TotalVehicles() {

    

    return (
        <>
         
       <div className="total-drivers">
   
           
               <Closing />
               <div style={{margin: "10px auto", width: "fit-content"}} > <h1 style={{margin: "0"}}>Vehicles List</h1> </div>
               <VehiclesList />
               <Outlet />

               
        </div>

        </>
    )
}

export default TotalVehicles;