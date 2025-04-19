import { useState } from "react";
import { MdHome } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import AddDriverModal from "./AddDriverModal";



function NavBar() {
  const [showAddForm, setShowAddForm] = useState(false);
  const size = 70;
  const color = "white";

    return (
        <>
          
          <div className="footer">
            <MdHome className="footer_icon" size={size} color= {color} />
            < BiSolidReport className="footer_icon" size={size} color= {color} />
            <IoAddCircleSharp 
            className="footer_icon" 
            size={size} 
            color={color}
            onClick={() => setShowAddForm(true)}
             />
            <MdDelete className="footer_icon" size={size} color={color} />
            <FaRegEdit className="footer_icon" size={size} color={color} />
            <FaCarAlt className="footer_icon" size={size} color={color} />
          </div>

          {/* عرض المودال */}
          <AddDriverModal show={showAddForm} handleClose={() => setShowAddForm(false)} />


        </>
    )


}




export default NavBar;