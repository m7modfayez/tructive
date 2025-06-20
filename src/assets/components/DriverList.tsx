

// function DriverList() {


   //  const driversList = [
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoud@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate: 70
   //      },
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate: 77
   //      },
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate: 84
   //      },
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate: 90
   //      },
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 50
   //      },
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",           
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 50
   //      },{
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 50
   //      },
   //      {
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",           
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 50
   //      },{
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 50
   //      },{
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 10,
   //         excessiveIdling: 10,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 50
   //      },{
   //         name: "mahmoud",
   //         id: 1,
   //         vehicleID: 3,
   //         overSpeed: 10,
   //         harshAcce: "mahmoudd@gmail.com",
   //         harshBreaking: 10,
   //         driverBehaviour: 20,
   //         excessiveIdling: 40,
   //         vehicleCondition: "Good",
   //         rate:  Math.floor(Math.random() * 51) + 10
   //      },
   //         ]

//     return (
//         <>
//          {/* <div className="modal"> */}

//          <div className="driver-list-table-div">
//          <form>
//            <input className="driver-search" name="fsrch" id="" placeholder="Search..." />
//            </form>
//           <table className="driver-list-table">
//             <thead>
//             <tr>
//               <th>Driver ID</th>
//               <th>Driver Name</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Email Address</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {driversList.map((driver, index) =>(
//                      <tr key={index}>
//                      <td>{driver.id}</td>
//                      <td>{driver.name}</td>
//                      <td>{driver.vehicleID}</td>
//                      <td>{driver.overSpeed}</td>
//                      <td>{driver.harshAcce}</td>
//                    </tr>
//                 ) )  }
//             </tbody>
//           </table>
//           </div>
//           <div className="driver-list-buttons-div">
//             <button className="driver-list-buttons"> <b>Remove</b> </button>
//             <button className="driver-list-buttons"> <b>Add</b> </button>
//           </div>

//           {/* </div> */}
//         </>
//     )
// }

// export default DriverList;



import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

   const companyId = localStorage.getItem("companyId");
   let navigate = useNavigate();


   const onAddClick = () => {
      navigate("add-driver");
   }

   const onDeleteClick = () => {
      navigate("delete-driver");
   }

   useEffect(() => {
      const fetchDrivers = async () => {
         try {
            const response = await axios.get(`https://trucktive.runasp.net/api/Drivers?companyId=${companyId}`);
            setDriversList(response.data);
            setLoading(false);
         } catch (err) {
            console.error("Error fetching drivers:", err);
            setError("Failed to load drivers.");
            setLoading(false);
         }
      };

      fetchDrivers();
   }, []);

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