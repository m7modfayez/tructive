
import { GoPerson } from "react-icons/go";
import logo from "../assets/logo.png";

type HeaderProps = {
    role: string;
    userName?: string;
};

function Header({ role, userName }: HeaderProps) {
    return (
        <>
            <div className="dashboard-header">
                <img className="logo" src={logo} alt="Trucktive Logo" />
                <div className="user">
                    <GoPerson size={40} color="black" />
                    <p className="userName">{userName}</p>
                </div>
            </div>

            <div className="dash-head">
                <h1>{role} Dashboard</h1>
            </div>
        </>
    );
}

export default Header