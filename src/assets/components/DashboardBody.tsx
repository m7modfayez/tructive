import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DriverInfo from "./DriverInfo"
import DriverTable from "./DriverTable";
import TotalDrivers from './TotalDrivers'


function DashboardBody() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/total-drivers");
  }

    return(
        <>
          <div className="dash-body">

            
            <div style={{marginLeft: '20%', color:'#3D9FEE' }}>
                <h1>Company Name</h1>
            </div>
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