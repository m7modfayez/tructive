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


          </div>

        </>
    )


}




export default AdminNav;