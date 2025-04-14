

import React, { useState } from "react";
import axios from "axios";
import "./AddDriverModal.css";

interface AddDriverModalProps {
    show: boolean;
    handleClose: () => void;
}

const AddDriverModal: React.FC<AddDriverModalProps> = ({ show, handleClose }) => {
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

        // Example of API URL, replace with your actual URL later
        const apiUrl = "https://your-api-url.com/add-driver";

        try {
            // Make the POST request to the API
            const response = await axios.post(apiUrl, formData);

            if (response.status === 200) {
                setSuccessMessage("Driver has been added successfully!");
                setErrorMessage(""); // Clear any previous error message
            }
        } catch (error) {
            setErrorMessage("Failed to add driver. Please try again.");
            setSuccessMessage(""); // Clear success message if there's an error
        }
    };

    if (!show) return null;

    return (
        <div className="add-driver-modal-container">
            <div className="add-driver-modal-content">
                <button className="add-driver-close-btn" onClick={handleClose}>×</button>
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
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lName"
                            value={formData.lName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-row full-width">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
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
