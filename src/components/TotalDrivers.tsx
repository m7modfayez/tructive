import Closing from "./base-components/Closing";
import DriverList from "./DriverList";
import { Outlet } from "react-router-dom";

function TotalDrivers() {
    return (
        <>
            <div className="total-drivers">
                <Closing />
                <div className="page-header">
                    <h1>Drivers List</h1>
                </div>
                <DriverList />
                <Outlet />
            </div>
        </>
    );
}

export default TotalDrivers;