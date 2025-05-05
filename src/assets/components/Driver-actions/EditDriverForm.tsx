import { useState } from "react";
import axios from "axios";
import { JSX } from "react";
import BaseFormWindow from "../base-components/BaseFormWindow";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";




function EditDriverForm() {

    const location = useLocation();
    const dirver = location.state;
    const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);
    const {id} = useParams();
    const [formData, setFormData] = useState<Record<string, string>>({
        "first name": String(dirver.fName || ""),
        "last name": String(dirver.lName || ""),
        phone: String(dirver.phone || ""),
        address: String(dirver.address || ""),
        "email adrress": String(dirver.email || ""),
        password: "",
        "confirm password": ""
      });
    
      const formAttr = [
        { label: "Enter First Name", inputType: "text", placeHolder: "Enter first name", name: "first name" },
        { label: "Enter Last Name", inputType: "text", placeHolder: "Enter last name", name: "last name" },
        { label: "Phone", inputType: "text", placeHolder: "Enter phone number", name: "phone" },
        { label: "Enter the address", inputType: "text", placeHolder: "Enter the address", name: "address" },
        { label: "Enter email address", inputType: "email", placeHolder: "Enter email address", name: "email adrress" },
        
      ];
    
    
    console.log(dirver);

    const onSaveClick = async (data: any) => {
      try {
        console.log(data)
        console.log(id)
          const response = await axios.put(`https://trucktive.runasp.net/api/Drivers/${id}`, {
              userId: id,
              fName: data["first name"],
              lName: data["last name"],
              phone: data.phone,
              address: data.address
          });
  
          console.log("Driver updated:", response.data);
          // Optional: show success message or redirect
          setMessageHtml(
          <div style={{ backgroundColor: "#d4edda", padding: "10px", borderRadius: "5px", color: "#155724" }}>
            ✅ Driver has been updated successfully!
          </div>
          );
      } catch (error) {
          console.error("Error updating driver:", error);
          // Optional: show error message
          setMessageHtml(
          <div style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px", color: "#721c24" }}>
            ❌ An error occurred while deleting the driver.
          </div>
          );
      }
  };

    
    const formhead = `Edit Driver ${id}`

    return(
        <>
         <BaseFormWindow 
         formAttr={formAttr} 
         formValues={formData} 
         setFormValues={setFormData} 
         formHead= {formhead} 
         buttonName="Save Changes" 
         submitForm={onSaveClick}
         messageHtml={messageHtml}
        />
        </>
    )
}
export default EditDriverForm;