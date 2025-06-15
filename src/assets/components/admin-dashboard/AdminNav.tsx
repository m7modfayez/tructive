import { MdHome } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";




function AdminNav() {
  const size = 70;
  const color = "white";
  const navigate = useNavigate();
  
  const onMessageClick = () => {
    navigate("/messages");
  }

  const onHomeeClick = () => {
    navigate("/admin-dashboard");
  }

    return (
        <>
          
          <div className="footer">
            <MdHome className="footer_icon" size={size} color= {color} onClick={onHomeeClick} />
            <BiSolidMessageRounded className="footer_icon" size={size} color= {color} onClick={onMessageClick} />

            {/* < BiSolidReport className="footer_icon" size={size} color= {color} /> */}
            {/* <IoAddCircleSharp className="footer_icon" size={size} color={color} /> */}
            {/* <MdDelete className="footer_icon" size={size} color={color} /> */}
            {/* <FaRegEdit className="footer_icon" size={size} color={color} /> */}
            {/* <FaCarAlt className="footer_icon" size={size} color={color} /> */}

          </div>

        </>
    )


}




export default AdminNav;