
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { JSX } from "react";
import BaseFormWindow from "../../base-components/BaseFormWindow";
import axios from "axios";

function EditCompanyWindow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const companyData = location.state;

  const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);
  
 
  console.log("company data", companyData);

  const [formData, setFormData] = useState<Record<string, string>>({
    name: String(companyData?.name || ""),
    email: String(companyData?.email || ""),
    phone: String(companyData?.phone || ""),
    address: String(companyData?.address || ""),
  });

  const formAttr = [
    { label: "Edit Company Name", inputType: "text", placeHolder: "Enter Company Name..", name: "name" },
    { label: "Edit Email Address", inputType: "email", placeHolder: "Enter Company Email..", name: "email" },
    { label: "Edit Phone", inputType: "text", placeHolder: "Enter Company Phone..", name: "phone" },
    { label: "Edit Address", inputType: "text", placeHolder: "Enter Company Address..", name: "address" },
  ];

  const onEditClick = async (data: Record<string, string>) => {
    try {
      const response = await axios.put(`https://trucktive.runasp.net/api/Companies/${id}`, data);
       console.log("company updated:", response.data);
        // Optional: show success message or redirect
          setMessageHtml(
          <div style={{ backgroundColor: "#d4edda", padding: "10px", borderRadius: "5px", color: "#155724" }}>
            ✅ Driver has been updated successfully!
          </div>
          );
                setTimeout(() => navigate(-1), 2000 ); 
      
    } catch (error: any) {
      console.error("Failed to update company:", error);
       // Optional: show error message
          setMessageHtml(
          <div style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px", color: "#721c24" }}>
            ❌ An error occurred while deleting the driver.
          </div>
          );
    }
  };

  return (
    <BaseFormWindow
      formAttr={formAttr}
      formValues={formData}
      setFormValues={setFormData}
      formHead={`Edit Company ${id}`}
      buttonName="Save Changes"
      submitForm={onEditClick}
      messageHtml={messageHtml}
    />
  );
}

export default EditCompanyWindow;
