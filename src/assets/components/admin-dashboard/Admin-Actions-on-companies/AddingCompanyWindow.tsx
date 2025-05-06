import { useState } from "react";
import axios from "axios";
import Closing from "../../base-components/Closing";
import BaseButton from "../../base-components/BaseButton";




function AddingCompanyWindow() {

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
        

    const confirmAddCompany = async (e: React.FormEvent) =>{
        console.log("company added successfuly..");
        console.log(formData);

        e.preventDefault();

        const payload = {
           userId: "f5f27fe4-15bd-43ba-b354-21854286bfa1",
           name: formData.companyName,
           phone: formData.companyPhone,
           email: formData.companyEmail,
           contractDate: new Date().toISOString()
        };

        const apiUrl = "https://trucktive.runasp.net/api/Companies";

        try {
            // Make the POST request to the API
            console.log("Payload:", payload);
            const response = await axios.post(apiUrl, payload);

            if (response.status === 200) {
                setSuccessMessage("Driver has been added successfully!");
                setErrorMessage(""); // 
            } else {
                // Handle other statuses if necessary
                setErrorMessage("An error occurred while adding the driver.");
                setSuccessMessage(""); // 
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

    }

   

    return(
        <>
        
        <div className="base-actions-window">

            <Closing />
            <div style={{textAlign:"center", margin:"0 auto", width:"fit-content"}} > <h1>Add New Company</h1> </div> 
            
            <div className="company-form-div">
            <form className="company-form">
                <div className="form-attr">
                 <label htmlFor="name">Company Name</label>
                 <input type="text" id="name" name="companyName" placeholder="Enter Company Name.."
                  value={formData.companyName}
                  onChange={handleChange}
                 />
                </div>

                <div className="form-attr">
                 <label htmlFor="email">Email Address</label>
                 <input type="text" id="email" name="companyEmail" placeholder="Enter Company Email.." 
                  value={formData.companyEmail}
                  onChange={handleChange}
                 />
                </div>

                <div className="form-attr">
                 <label htmlFor="phone">Phone</label>
                 <input type="text" id="phone" name="companyPhone" placeholder="Enter Company Phone.." 
                   value={formData.companyPhone}
                   onChange={handleChange}
                 />
                </div>

                <div className="form-attr">
                 <label htmlFor="address">Address</label>
                 <input type="text" id="address" name="companyAddress" placeholder="Enter Company Address.." 
                  value={formData.companyAddress}
                  onChange={handleChange}
                 />
                </div>

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

            </form>
            </div>
            <div style={{margin:"10px auto", width:"fit-content"}}>
            <BaseButton name="Add Company" className="admin-confirm-adding-button" baseButtonOnClick={confirmAddCompany} />
            </div>

        </div>
        </>
    )
}

export default AddingCompanyWindow;