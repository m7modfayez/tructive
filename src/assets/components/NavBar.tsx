import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";

function NavBar() {
  const size = 70;
  const color = "white";

  const navigate = useNavigate();

  const showDeleteForm = () => {
    navigate("delete-driver");
  };

  const showAddDriverForm = () => {
    navigate("add-driver");
  };

  const showSelectDriverWindow = () => {
    navigate("edit-driver");
  };

  const showDriverReportSelection = () => {
    // بدل ما تروح على route خاص، هنا بنبعث state علشان Dashboard يعرضه كمودال
    navigate("/supervisor-dashboard", {
      state: { showDriverReportSelection: true },
    });
  };

  return (
    <>
      <div className="footer">
        <MdHome className="footer_icon" size={size} color={color} />

        <BiSolidReport
          className="footer_icon"
          size={size}
          color={color}
          onClick={showDriverReportSelection}
        />

        <IoAddCircleSharp
          className="footer_icon"
          size={size}
          color={color}
          onClick={showAddDriverForm}
        />

        <MdDelete
          className="footer_icon"
          size={size}
          color={color}
          onClick={showDeleteForm}
        />

        <FaRegEdit
          className="footer_icon"
          size={size}
          color={color}
          onClick={showSelectDriverWindow}
        />

        <FaCarAlt className="footer_icon" size={size} color={color} />
      </div>
    </>
  );
}

export default NavBar;
