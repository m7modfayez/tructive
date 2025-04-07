import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";


function Closing() {

    const navigate = useNavigate();
        const onClose = () => {
            navigate(-1);
        }

    return(
        <>
            <button onClick={onClose} className="close-driver-list"> <IoMdClose size={60} color="black" /> </button>
        
        </>
    )
}

export default Closing;