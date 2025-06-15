// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
// import AddDriverModal from "./Driver-actions/AddDriverModal";



function NavBar() {
  // const [showAddForm, setShowAddForm] = useState(false);
  const size = 70;
  const color = "white";

  const navigate = useNavigate();
  const showDeleteForm = () => {
    navigate('delete-driver');
  }

  const showAddDriverForm = () => {
    navigate('add-driver');
  }

  const showSelectDriverWindow = () => {
    navigate('edit-driver');
  }

  const showVehiclesList = () => {
    navigate('vehicles-list');
  }

  const ShowReport = () => {
    navigate('driver-report-selection');
  }

  

    return (
        <>
          
          <div className="footer">
            <MdHome className="footer_icon" size={size} color= {color} />
            < BiSolidReport className="footer_icon" size={size} color= {color}
              onClick={ShowReport}
            />
            <IoAddCircleSharp 
            className="footer_icon" 
            size={size} 
            color={color}
            onClick={showAddDriverForm}
            // onClick={() => setShowAddForm(true)}
             />

            <MdDelete className="footer_icon" size={size} color={color}
            onClick={showDeleteForm} 
            />
            <FaRegEdit className="footer_icon" size={size} color={color}
             onClick={showSelectDriverWindow} 
             />
            <FaCarAlt className="footer_icon" size={size} color={color} 
            onClick={showVehiclesList}
            />
          </div>

          {/* عرض المودال */}
          {/* <AddDriverModal show={showAddForm} handleClose={() => setShowAddForm(false)} /> */}


        </>
    )


}




export default NavBar;