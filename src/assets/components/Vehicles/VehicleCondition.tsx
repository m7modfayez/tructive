import Closing from "../base-components/Closing";
import { useParams } from "react-router-dom";

function VehicleCondition() {

    const {vehicleID} = useParams();

    return(
          <div className="base-actions-window" style={{ width: "80vw" }}>
      <Closing />
      <div style={{ textAlign: "center", margin: "0 auto", width: "fit-content" }}>
        <h1>Car Problem ID {vehicleID} </h1>
      </div>

      <div style={{textAlign:"center", margin:"100px auto 0",padding:"10px 60px" }}>
      <h3>Car has some problems. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus voluptas exercitationem pariatur, esse cumque ipsum quas quasi voluptate est atque saepe ipsa debitis dolorem eveniet nihil repellat totam accusantium.</h3>
      </div>

    </div>
    )
}
export default VehicleCondition;