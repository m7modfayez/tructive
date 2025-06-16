import React, { useState } from "react";
import axios from "axios";
import "./AddDriverModal.css";
import Closing from "../base-components/Closing";
import { useNavigate } from "react-router-dom";
interface AddDriverModalProps {
    // show: boolean;
    // handleClose: () => void;
}

const AddDriverModal: React.FC<AddDriverModalProps> = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        phone: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const userId = localStorage.getItem("userId");

    // Handle form data change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Add supervisorId to the payload (1 as required)
        const payload = {
            ...formData,
            userId
        };

        // Example of API URL, replace with your actual URL later
        const apiUrl = "https://trucktive.runasp.net/api/Drivers";

        try {
            
            if(formData.password != formData.confirmPassword)
            {
                setErrorMessage("Passwords do not match.");
                return;
            }

            const response = await axios.post(apiUrl, payload);
            console.log(response.status)

            if (response.status === 200) {
                setSuccessMessage("Driver has been added successfully!");
                setErrorMessage(""); // Clear any previous error message
                setTimeout(() => {
                navigate(-1);
                }, 2000);
            } else {
                // Handle other statuses if necessary
                setErrorMessage("An error occurred while adding the driver.");
                setSuccessMessage(""); // Clear success message if there's an error
            }
        } catch (error: any) {
            if (error.response) {
                // If the error has a response, log the response data
                console.error("API Error:", error.response.data);
                setErrorMessage(error.response.data?.message || "An error occurred while adding the driver.");
            } else {
                // If there's no response, log the error message
                console.error("Error:", error.message);
                setErrorMessage("An unexpected error occurred.");
            }
            setSuccessMessage(""); // Clear success message if there's an error
        }
    };

    // if (!show) return null;

    return (
        <div className="add-driver-modal-container">
            <div className="add-driver-modal-content">
                <Closing />
                {/* <button className="add-driver-close-btn" onClick={handleClose}>×</button> */}
                <h2 className="add-driver-title">Create New Driver Account</h2>

                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="error-message">
                        {errorMessage}
                    </div>
                )}

                <form className="add-driver-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="fName"
                            value={formData.fName}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lName"
                            value={formData.lName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="number"
                            placeholder="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row full-width">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="add-driver-submit-btn">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDriverModal;