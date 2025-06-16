import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DriverInfo from "./DriverInfo";
import ComapnyName from "./base-components/CompanyName";
import DriverTable from "./DriverTable";

function DashboardBody() {
  const companyId = localStorage.getItem("companyId");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (companyId) {
      axios
        .get(`https://trucktive.runasp.net/api/Companies/${companyId}`)
        .then((res) => {
          setCompanyName(res.data.name);
        })
        .catch((err) => {
          console.error("Error fetching company name:", err);
        });
    }
  }, [companyId]);

  const handleClick = () => {
    navigate("total-drivers");
  };

  return (
    <>
      <div className="dash-body">
        <DriverInfo onChildClick={handleClick} />
        <ComapnyName companyName={companyName} />
        <DriverTable />
      </div>
    </>
  );
}

export default DashboardBody;
