import Closing from "./base-components/Closing";
import DriverList from "./DriverList";

function TotalDrivers() {

    

    return (
        <>
         
       <div className="total-drivers">
   
           
               <Closing />
               <div style={{margin: "10px auto", width: "fit-content"}} > <h1 style={{margin: "0"}}>Drivers List</h1> </div>
               <DriverList />
        </div>

        </>
    )
}

export default TotalDrivers;