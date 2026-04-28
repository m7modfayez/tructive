import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function AddingCompanyWindow() {

    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Record<string, string>>({
        companyName: "",
        companyEmail: "",
        companyPhone: "",
        companyAddress: ""
    });
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }; 

        const [successMessage, setSuccessMessage] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setIsLoading] = useState(false);
        

    const confirmAddCompany = async (e: React.FormEvent) =>{
        console.log("company added successfuly..");
        console.log(formData);

        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const payload = {
           userId: userId,
           name: formData.companyName,
           phone: formData.companyPhone,
           email: formData.companyEmail,
           contractDate: new Date().toISOString()
        };

        const apiUrl = "https://trucktive.runasp.net/api/Companies";

        try {
            // Make the POST request to the API
            console.log("Adding company with payload:", payload);
            const response = await axios.post(apiUrl, payload);
            console.log("Company added response:", response.data);

            const { id } = response.data;
            console.log("Company added with ID:", id);
            setSuccessMessage("Company added successfully!");
            setTimeout(() => {
                navigate('/admin-dashboard');
            }, 2000);
        } catch (error: any) {
            console.error("Error adding company:", error);
            if (error.response) {
                console.error("API Error:", error.response.data);
                setErrorMessage(error.response.data?.message || "An error occurred while adding the company.");
            } else {
                console.error("Network Error:", error.message);
                setErrorMessage("Network error. Please check your connection and try again.");
            }
            setSuccessMessage(""); 
        } finally {
            setIsLoading(false);
        }

    }

   

    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Add New Company</h2>
                    <button className="modal-close" onClick={() => navigate('/admin-dashboard')}>
                        ×
                    </button>
                </div>
                
                <div className="modal-body">
                    <form onSubmit={confirmAddCompany} className="form-layout">
                        <div className="form-grid-2">
                            <div className="form-group">
                                <label htmlFor="companyName" className="form-label">Company Name</label>
                                <input 
                                    type="text" 
                                    id="companyName" 
                                    name="companyName" 
                                    placeholder="Enter company name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyEmail" className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    id="companyEmail" 
                                    name="companyEmail" 
                                    placeholder="Enter company email"
                                    value={formData.companyEmail}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyPhone" className="form-label">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="companyPhone" 
                                    name="companyPhone" 
                                    placeholder="Enter company phone"
                                    value={formData.companyPhone}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyAddress" className="form-label">Address</label>
                                <input 
                                    type="text" 
                                    id="companyAddress" 
                                    name="companyAddress" 
                                    placeholder="Enter company address"
                                    value={formData.companyAddress}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {successMessage && (
                            <div className="alert alert-success">
                                {successMessage}
                            </div>
                        )}

                        {errorMessage && (
                            <div className="alert alert-danger">
                                {errorMessage}
                            </div>
                        )}
                        
                        <div className="form-actions">
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={() => navigate('/admin-dashboard')}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Adding...' : 'Add Company'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddingCompanyWindow;