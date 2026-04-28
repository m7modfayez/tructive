
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vehicleAPI } from "../../services/api";
import { getLocalStorageItem, handleError } from "../../utils/helpers";

interface Vehicle {
   id: number;
   brand: string;
   model: string;
   year: number;
   supervisorName: string
   companyId: number,
}

function VehiclesList() {
   const [vehiclesList, setVehiclesList] = useState<Vehicle[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [searchId, setSearchId] = useState("")
   
   
   const navigate = useNavigate();
   

    useEffect(() => {
    const fetchVehicles = async () => {
      const companyId = getLocalStorageItem("companyId");
      
      if (!companyId) {
        setError("Company ID not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await vehicleAPI.getVehicles(companyId);
        setVehiclesList(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        setError(handleError(err, "Failed to load vehicles."));
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

   if (loading) return <div>Loading...</div>;
   if (error) return <div style={{ color: "red" }}>{error}</div>;


   const onAddClick = () => {
      navigate("add-vehicle");
   }

   const onDeleteClick = () => {
      navigate("delete-vehicle");
   }

   const filteredVehicles = vehiclesList.filter((vehicle) =>
     vehicle.id.toString().includes(searchId)
   );

   return (
      <>
            <>
               <div className="driver-list-table-div">
                  <form>
                     <input className="driver-search" name="fsrch" placeholder="Search by ID..."  value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                  </form>
                  <table className="driver-list-table">
                     <thead>
                        <tr>
                           <th>Vehicle ID</th>
                           <th>Vehicle manufacturer</th>
                           <th>Vehicle Model</th>
                           <th>Vehicle Year</th>
                           <th>CompanyId</th>
                        </tr>
                     </thead>
                     <tbody>
                        {filteredVehicles.map((vehicle) => (
                           <tr key={vehicle.id}>
                              <td>{vehicle.id}</td>
                              <td>{vehicle.brand}</td>
                              <td>{vehicle.model}</td>
                              <td>{vehicle.year}</td>
                              <td>{vehicle.companyId}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="driver-list-buttons-div">
                  <button className="driver-list-buttons" onClick={onDeleteClick}>
                     <b>Remove</b>
                  </button>
                  <button onClick={onAddClick} className="driver-list-buttons">
                     <b>Add</b>
                  </button>
               </div>
            </>
         
      </>
   );
}

export default VehiclesList;