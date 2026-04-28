import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { driverAPI } from "../services/api";
import { getLocalStorageItem, handleError } from "../utils/helpers";
import { STORAGE_KEYS } from "../utils/constants";

interface Driver {
   id: string;
   fName: string;
   lName: string;
   phone: string;
   address: string;
   email: string;
   password: string;
   supervisorId: number;
   rate: number,
}

function DriverList() {
   const [driversList, setDriversList] = useState<Driver[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [searchId, setSearchId] = useState("");

   const companyId = getLocalStorageItem(STORAGE_KEYS.COMPANY_ID);
   let navigate = useNavigate();

   const onAddClick = () => {
      navigate("add-driver");
   }

   const onDeleteClick = () => {
      navigate("delete-driver");
   }

   useEffect(() => {
      const fetchDrivers = async () => {
         if (!companyId) {
            setError("Company ID not found.");
            setLoading(false);
            return;
         }

         try {
            const response = await driverAPI.getDrivers(companyId);
            setDriversList(response.data);
            setLoading(false);
         } catch (err) {
            console.error("Error fetching drivers:", err);
            setError(handleError(err, "Failed to load drivers."));
            setLoading(false);
         }
      };

      fetchDrivers();
   }, [companyId]);

   if (loading) return <div>Loading...</div>;
   if (error) return <div style={{ color: "red" }}>{error}</div>;

   const filteredDrivers = driversList.filter((driver) =>
     driver.id.toString().includes(searchId)
   );

   return (
      <>
            <>
               <div className="driver-list-table-div">
                  <form>
                     <input className="driver-search" name="fsrch" placeholder="Search by ID..." value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                  </form>
                  <table className="driver-list-table">
                     <thead>
                        <tr>
                           <th>Driver ID</th>
                           <th>Driver Name</th>
                           <th>Phone</th>
                           {/* <th>Address</th> */}
                           <th>Rate</th>
                           <th>Email Address</th>
                        </tr>
                     </thead>
                     <tbody>
                       {filteredDrivers.map((driver) => (
                         <tr key={driver.id}>
                           <td>{driver.id}</td>
                           <td>{driver.fName} {driver.lName}</td>
                           <td>{driver.phone}</td>
                           {/* <td>{driver.address}</td> */}
                           <td>{driver.rate}</td>
                           <td>{driver.email}</td>
                         </tr>
                       ))}
                     </tbody>

                  </table>
               </div>
               <div className="driver-list-buttons-div">
                  <button className="driver-list-buttons" onClick={onDeleteClick}>
                     <b>Remove</b>
                  </button>
                  <button className="driver-list-buttons" onClick={onAddClick}>
                     <b>Add</b>
                  </button>
               </div>
            </>
         
      </>
   );
}

export default DriverList;