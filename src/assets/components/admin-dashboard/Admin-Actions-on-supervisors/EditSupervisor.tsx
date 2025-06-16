import { useState } from "react";
import BaseFormWindow from "../../base-components/BaseFormWindow";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";




function EditSupervisor() {

    const location = useLocation();
    const supervisorData = location.state;
    const {name ,companyID} = useParams();

    const [formData, setFormData] = useState<Record<string, string>>({
        "first name": String(supervisorData.Fname || ""),
        "last name": String(supervisorData.Lname || ""),
        phone: String(supervisorData.phone || ""),
        address: String(supervisorData.address || ""),
        "email adrress": String(supervisorData.email || ""),
        password: "",
        "confirm password": ""
      });
    
      const formAttr = [
        { label: "Enter First Name", inputType: "text", placeHolder: "Enter first name", name: "first name" },
        { label: "Enter Last Name", inputType: "text", placeHolder: "Enter last name", name: "last name" },
        { label: "Phone", inputType: "text", placeHolder: "Enter phone number", name: "phone" },
        { label: "Enter the address", inputType: "text", placeHolder: "Enter the address", name: "address" },
        { label: "Enter email address", inputType: "email", placeHolder: "Enter email address", name: "email adrress" },
        { label: "Password", inputType: "password", placeHolder: "Create a password", name: "password" },
        { label: "Confirm Password", inputType: "password", placeHolder: "Confirm password", name: "confirm password" }
      ];
    
    
    console.log(supervisorData);

    const onEditClick = (data: any) => {
        console.log("company ID", companyID);
        console.log("company Name", name);
        console.log("save changes", data);
    }
    const {id} = useParams();
    const formhead = `Edit Supervisor ${id}`

    return(
        <>
         <BaseFormWindow 
         formAttr={formAttr} 
         formValues={formData} 
         setFormValues={setFormData} 
         formHead= {formhead} 
         buttonName="Save Changes" 
         submitForm={onEditClick}
        />
        </>
    )
}
export default EditSupervisor;