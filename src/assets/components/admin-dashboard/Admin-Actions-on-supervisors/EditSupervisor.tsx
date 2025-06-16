import { useState } from "react";
import axios from "axios";
import BaseFormWindow from "../../base-components/BaseFormWindow";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditSupervisor() {
  const { state: supervisorData } = useLocation() as { state: any };
  const { id, companyID } = useParams();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();


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
      await axios.put(`https://trucktive.runasp.net/api/Supervisors/${id}`, payload);
      alert("Supervisor updated successfully ✅");
      navigate(-1);
    } catch (err) {
      console.error(err);
      alert("Failed to update supervisor ❌");
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
    />
  );
}

export default EditSupervisor;
