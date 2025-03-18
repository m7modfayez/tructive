import { useNavigate } from "react-router-dom";
import DriverInfo from "./DriverInfo"
import ComapnyName from "./base-components/CompanyName";
import DriverTable from "./DriverTable";


function DashboardBody() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("total-drivers");
  }

    return(
        <>
          <div className="dash-body">

            
            {/* <div style={{marginLeft: '20%', color:'#3D9FEE' }}>
                <h1>Company Name</h1>
            </div> */}

            {/* <div style={{margin: '0 auto', width: "fit-content", color:'#3D9FEE' }}>
                <h1>Company Name</h1>
            </div> */}

            <ComapnyName companyName="Johayna" />

            <DriverInfo onChildClick={handleClick} />
            <DriverTable />
            {/* <Router>
              <Routes>
                <Route path="/total-drivers" element={<TotalDrivers />} />
              </Routes>
            </Router> */}
            {/* <TotalDrivers /> */}


          </div>
        </>
    )
}

export default DashboardBody;