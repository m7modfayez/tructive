
import { GoPerson } from "react-icons/go";
import logo from "./logo.png";

type HeaderProps = {
    role: string,
    userName?: string,
  };
  

function Header({role, userName}: HeaderProps ) {

    return (
        <>
        
         <div className="dashboard-header">
            <img className="logo" src={logo} />
            <div className="user">
            <GoPerson size={40} color="black" />
            {/* <p className="userName">UserName</p> */}
            <p className="userName">{userName}</p>

            {/* <p className="userName">mahmoud</p> */}
            </div>
         </div>

         <div className="dash-head">
              <h1> {role} Dashboard</h1>
              {/* <h2>{role}'s Dashboard</h2> */}
         </div>


        </>
    )
    

    
}

export default Header