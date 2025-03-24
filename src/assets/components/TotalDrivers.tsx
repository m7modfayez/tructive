import Closing from "./base-components/Closing";
import DriverList from "./DriverList";

function TotalDrivers() {

    

    return (
        <>
         
       <div className="total-drivers">
   
           
               <Closing />
               <h1 style={{margin: "15px 42%"}}>Drivers List</h1>
               <DriverList />
        </div>

        </>
    )
}

export default TotalDrivers;