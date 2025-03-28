

function DriverList() {

    const driversList = [
        {
           name: "mahmoud",
           id: 1,
           vehicleID: 3,
           overSpeed: 10,
           harshAcce: "mahmoud@gmail.com",
           harshBreaking: 10,
           driverBehaviour: 10,
           excessiveIdling: 10,
           vehicleCondition: "Good",
           rate: 70
        },
        {
           name: "mahmoud",
           id: 1,
           vehicleID: 3,
           overSpeed: 10,
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",           
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
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",           
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
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",
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
           harshAcce: "mahmoudd@gmail.com",
           harshBreaking: 10,
           driverBehaviour: 20,
           excessiveIdling: 40,
           vehicleCondition: "Good",
           rate:  Math.floor(Math.random() * 51) + 10
        },
           ]

    return (
        <>
         {/* <div className="modal"> */}

         <div className="driver-list-table-div">
         <form>
           <input className="driver-search" name="fsrch" id="" placeholder="Search..." />
           </form>
          <table className="driver-list-table">
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
                {driversList.map((driver, index) =>(
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
          </div>
          <div className="driver-list-buttons-div">
            <button className="driver-list-buttons"> <b>Remove</b> </button>
            <button className="driver-list-buttons"> <b>Add</b> </button>
          </div>

          {/* </div> */}
        </>
    )
}

export default DriverList;