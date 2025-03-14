
import { GoPerson } from "react-icons/go";

function Header() {

    return (
        <>
        
         <div className="dashboard-header">
            <img className="logo" src="src/assets/image.png" />
            <div className="user">
            <GoPerson size={40} color="black" />
            <p className="userName">UserName</p>
            {/* <p className="userName">mahmoud</p> */}
            </div>
         </div>
         <div className="">
         {/* <div>
            <h1>hello everybody</h1>
         </div> */}

         </div>
         <div className="dash-head">
              <h1>Dashboard</h1>
      </div>


        </>
    )
    

    
}

export default Header