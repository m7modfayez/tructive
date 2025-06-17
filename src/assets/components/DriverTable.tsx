import { useNavigate } from "react-router-dom";


function DriverTable() {

    const driversTable = [
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 1,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate: 70
 },
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 2,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate: 77
 },
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate: 84
 },
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate: 90
 },
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 50
 },
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 50
 },{
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 50
 },
 {
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 50
 },{
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 50
 },{
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 10,
    excessiveIdling: 10,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 50
 },{
    name: "mahmoud",
    id: 1,
    vehicleID: 3,
    overSpeed: 10,
    harshAcce: 10,
    harshBreaking: 10,
    driverBehaviour: 20,
    excessiveIdling: 40,
    vehicleCondition: "Good",
    rate:  Math.floor(Math.random() * 51) + 10
 },
    ]
    
    const navigate = useNavigate();

    const onConditionClick = (vehicleID:number) => {
      navigate(`vehicle-condition/:${vehicleID}`);

    }

    return(
        <>
          <div className="table-div">
          <table className="driver-table">
            <thead>
            <tr>
              <th>Driver ID</th>
              <th>Driver Name</th>
              <th>Vehicle ID</th>
              <th>Over Speed</th>
              <th>Harsh Acceleration</th>
              <th>Harsh Breaking</th>
              {/* <th>Driver Behaviour</th> */}
              <th>Excessive Idling</th>
              <th>Vehicle Condition</th>
              <th>Rate</th>
            </tr>
            </thead>
            <tbody>
                {driversTable.map((driver, index) =>(
                     <tr key={index}>
                     <td>{driver.id}</td>
                     <td>{driver.name}</td>
                     <td>{driver.vehicleID}</td>
                     <td>{driver.overSpeed}</td>
                     <td>{driver.harshAcce}</td>
                     <td>{driver.harshBreaking}</td>
                     {/* <td>{driver.driverBehaviour}</td> */}
                     <td>{driver.excessiveIdling}</td>
                     <td style={{cursor:"pointer"}} onClick={() => onConditionClick(driversTable[index].vehicleID)} >{driver.vehicleCondition}</td>
                     <td style={{backgroundColor: driver.rate >=80? '#c6ffc9' : driver.rate >=65? "#fffaa4" : '#ffc4c9' }}>{driver.rate}</td>
                   </tr>
                ) )  }
            </tbody>
          </table>
          </div>

          {/* <table className="driver-list-table">
            <thead>
            <tr>
              <th>Driver ID</th>
              <th>Driver Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Email Address</th>
            </tr>
            </thead>
            <tbody>
                {driversTable.map((driver, index) =>(
                     <tr key={index}>
                     <td>{driver.id}</td>
                     <td>{driver.name}</td>
                     <td>{driver.vehicleID}</td>
                     <td>{driver.overSpeed}</td>
                     <td>{driver.harshAcce}</td>
                   </tr>
                ) )  }
            </tbody>
          </table>
           */}

        </>
    )
}

export default DriverTable;