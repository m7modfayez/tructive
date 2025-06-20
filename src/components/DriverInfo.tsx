import { IoPersonOutline } from "react-icons/io5";
import { useState ,useEffect } from "react";
import axios from "axios";


interface DriverInfoProps {
    onChildClick: () => void;
  }

  

function DriverInfo({onChildClick}: DriverInfoProps) {

  const [driversLength, setDriversLength] = useState(null);

  const companyId = localStorage.getItem("companyId");


  useEffect(() => {
      const fetchDrivers = async () => {
         try {
            const response = await axios.get(`https://trucktive.runasp.net/api/Drivers?companyId=${companyId}`);
            setDriversLength(response.data.length);
           
         } catch (err) {
            console.error("Error fetching drivers:", err);
         }
      };

      fetchDrivers();
   }, []);
    
 

    return(
        <>
          <div className="drivers">

            <div onClick={onChildClick} className="driver tot-drivers">
                <h2>Total Drivers</h2>
                {/* <p>click to see</p> */}
                <h2>{driversLength}</h2>
                <IoPersonOutline size={70} style={{ margin:'20px', float: 'right',}}/>
                {/* <h4>James Wiliams</h4> */}
            </div>

            <div className="driver" style={{backgroundColor:'rgb(183, 255, 189)',}}>
                <h2>Best Driver</h2>
                <h2>95%</h2>
                <h4>Kareem Ashraf	</h4>

            </div>

            <div className="driver" style={{backgroundColor:'rgb(255, 203, 203)',}}>
                <h2>Worst Driver</h2>
                <h2>50%</h2>
                <h4>Ahmed Yomni</h4>

            </div>

          </div>
        </>
    )
}

export default DriverInfo;