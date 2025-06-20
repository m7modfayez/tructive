import { useState } from "react";
import { JSX } from "react";
import axios from "axios";
import BaseFormWindow from "../../base-components/BaseFormWindow";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditSupervisor() {
  const { state: supervisorData } = useLocation() as { state: any };
  const { id, companyID } = useParams();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);


  const [formData, setFormData] = useState<Record<string, string>>({
    "first name": supervisorData?.fName ?? "",
    "last name": supervisorData?.lName ?? "",
    phone: supervisorData?.phone ?? "",
    address: supervisorData?.address ?? "",
    "email adrress": supervisorData?.email ?? "",
    password: "",
    "confirm password": "",
  });

  const formAttr = [
    { label: "Enter First Name", inputType: "text", placeHolder: "Enter first name", name: "first name" },
    { label: "Enter Last Name", inputType: "text", placeHolder: "Enter last name", name: "last name" },
    { label: "Phone", inputType: "text", placeHolder: "Enter phone number", name: "phone" },
    { label: "Enter the address", inputType: "text", placeHolder: "Enter the address", name: "address" },
    { label: "Enter email address", inputType: "email", placeHolder: "Enter email address", name: "email adrress" },
    { label: "Password", inputType: "password", placeHolder: "Create a password", name: "password" },
    { label: "Confirm Password", inputType: "password", placeHolder: "Confirm password", name: "confirm password" },
  ];

  const onEditClick = async (data: Record<string, string>) => {
    if (data.password && data.password !== data["confirm password"]) {
      return alert("Passwords do not match!");
    }

    const payload = {
      userId: userId,
      fName: data["first name"],
      lName: data["last name"],
      phone: data.phone,
      address: data.address,
      email: data["email adrress"],
      companyId: Number(companyID),
      password: data.password || undefined, //  handle it to send optional.
    };

    try {
      const response = await axios.put(`https://trucktive.runasp.net/api/Supervisors/${id}`, payload);
      // alert("Supervisor updated successfully ✅");
      if(response.status === 200)
      {
          setMessageHtml(
           <div style={{ backgroundColor: "#d4edda", padding: 10, borderRadius: 5, color: "#155724" }}>
             ✅ Supervisor has been updated successfully!
           </div>
          );
          setTimeout(() => navigate(-1) , 2000 );
      }

      else {
      // alert("Failed to update supervisor ❌");
        setMessageHtml(
        <div style={{ backgroundColor: "#f8d7da", padding: 10, borderRadius: 5, color: "#721c24" }}>
          ❌ An error occurred while updating the Supervisor.
        </div>
        );        
      }

    } catch (err) {
      console.error(err);
      // alert("Failed to update supervisor ❌");
      setMessageHtml(
        <div style={{ backgroundColor: "#f8d7da", padding: 10, borderRadius: 5, color: "#721c24" }}>
          ❌ An error occurred while updating the Supervisor.
        </div>
      );
    }
  };

  return (
    <BaseFormWindow
      formAttr={formAttr}
      formValues={formData}
      setFormValues={setFormData}
      formHead={`Edit Supervisor ${id}`}
      buttonName="Save Changes"
      submitForm={onEditClick}
        messageHtml={messageHtml}
    />
  );
}

export default EditSupervisor;
