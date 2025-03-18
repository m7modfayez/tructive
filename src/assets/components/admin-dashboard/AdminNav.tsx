import { MdHome } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";




function AdminNav() {
  const size = 70;
  const color = "white";

    return (
        <>
          
          <div className="footer">
            <MdHome className="footer_icon" size={size} color= {color} />
            <BiSolidMessageRounded className="footer_icon" size={size} color= {color} />

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