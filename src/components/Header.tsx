
import { GoPerson } from "react-icons/go";
import logo from "../assets/logo.png";

type HeaderProps = {
    role: string;
    userName?: string;
};

function Header({ role, userName }: HeaderProps) {
    return (
        <header className="dashboard-header">
            <div className="dashboard-brand">
                <img className="dashboard-logo" src={logo} alt="Trucktive Logo" />
                <div>
                    <h1 className="dashboard-title">{role} Dashboard</h1>
                    <p className="dashboard-subtitle">Manage your fleet with ease</p>
                </div>
            </div>
            <div className="dashboard-user">
                <div className="avatar">
                    <GoPerson size={20} />
                </div>
                <span>{userName}</span>
            </div>
        </header>
    );
}

export default Header