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


            <ComapnyName companyName="Johayna" />

            <DriverInfo onChildClick={handleClick} />
            <DriverTable />

          </div>
        </>
    )
}

export default DashboardBody;