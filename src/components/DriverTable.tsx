// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DriverTable() {

//     const driversTable = [
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 1,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate: 70
//  },
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 2,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate: 77
//  },
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate: 84
//  },
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate: 90
//  },
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 50
//  },
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 50
//  },{
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 50
//  },
//  {
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 50
//  },{
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 50
//  },{
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 10,
//     excessiveIdling: 10,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 50
//  },{
//     name: "mahmoud",
//     id: 1,
//     vehicleID: 3,
//     overSpeed: 10,
//     harshAcce: 10,
//     harshBreaking: 10,
//     driverBehaviour: 20,
//     excessiveIdling: 40,
//     vehicleCondition: "Good",
//     rate:  Math.floor(Math.random() * 51) + 10
//  },
//     ]
    
   //  const navigate = useNavigate();
    const companyId = localStorage.getItem("companyId");
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);


   //  const onConditionClick = (vehicleID:number) => {
   //    navigate(`vehicle-condition/:${vehicleID}`);
   //  }

     useEffect(() => {
    if (!companyId) return;

    const fetchTrips = async () => {
      try {
        const { data } = await axios.get(
          `https://trucktive.runasp.net/api/Trips/company/${companyId}`
        );

        // Map the API shape to the table shape (adjust keys if needed)
        const mapped = data;
        setTrips(mapped);
      } catch (err) {
        console.error("Error fetching trips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [companyId]);

    if (loading) return <p>Loading drivers…</p>;

    return(
        <>
          <div className="table-div">
          <table className="driver-table">
            <thead>
            <tr>
              <th>Trip ID</th>
              <th>Driver ID</th>
              <th>Driver Name</th>
              <th>Vehicle ID</th>
              <th>Vehicle Name</th>
              <th>Over Speed</th>
              <th>Harsh Acceleration</th>
              <th>Harsh Breaking</th>
              <th>Excessive Idling</th>
              {/* <th>Vehicle Condition</th> */}
              <th>Rate</th>
            </tr>
            </thead>
            <tbody>
                {trips.map((trip: any, index) =>(
                     <tr key={index}>
                     <td>{trip.id}</td>
                     <td>{trip.driverId}</td>
                     <td>{trip.driverName}</td>
                     <td>{trip.vehicleId}</td>
                     <td>{trip.vehicleName}</td>
                     <td>{trip.overspeedEvents}</td>
                     <td>{trip.hashAcceleration}</td>
                     <td>{trip.hashBraking}</td>
                     <td>{trip.idPrime}</td>
                     {/* <td style={{cursor:"pointer"}} onClick={() => onConditionClick(driversTable[index].vehicleID)} >{trip.vehicleCondition}</td> */}
                     <td style={{backgroundColor: trip.rate*10 >=80? '#c6ffc9' : trip.rate*10 >=65? "#fffaa4" : '#ffc4c9' }}>{trip.rate*10}</td>
                   </tr>
                ) )  }
            </tbody>
          </table>
          </div>


        </>
    )
}

export default DriverTable;