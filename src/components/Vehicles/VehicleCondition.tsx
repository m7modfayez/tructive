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

      <div style={{textAlign:"center", margin:"100px auto 0",padding:"10px 80px" }}>
      <h3> There is a fuel injection process problem.
         This means the engine may not be receiving the correct amount of fuel,
          which could result in poor performance or potential stalling.
      </h3>
      </div>

    </div>
    )
}
export default VehicleCondition;