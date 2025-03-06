import { IoPersonOutline } from "react-icons/io5";


interface DriverInfoProps {
    onChildClick: () => void;
  }

function DriverInfo({onChildClick}: DriverInfoProps) {
    
 

    return(
        <>
          <div className="drivers">

            <div onClick={onChildClick} className="driver tot-drivers">
                <h2>Total Drivers</h2>
                <h2>15</h2>
                <IoPersonOutline size={70} style={{ margin:'20px', float: 'right',}}/>
                {/* <h4>James Wiliams</h4> */}
            </div>

            <div className="driver" style={{backgroundColor:'rgb(183, 255, 189)',}}>
                <h2>Best Driver</h2>
                <h2>95%</h2>
                <h4>James Wiliams</h4>

            </div>

            <div className="driver" style={{backgroundColor:'rgb(255, 203, 203)',}}>
                <h2>Worst Driver</h2>
                <h2>50%</h2>
                <h4>Emily Davis</h4>

            </div>

          </div>
        </>
    )
}

export default DriverInfo;