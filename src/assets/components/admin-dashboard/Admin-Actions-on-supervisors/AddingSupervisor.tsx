// import React from "react";
import BaseFormWindow from "../../base-components/BaseFormWindow";
import { useParams } from "react-router-dom";
import axios from "axios";

const addingSupervisorFormAttr = [
  {
    label: "Enter First Name",
    inputType: "text",
    placeHolder: "Enter first name",
    name: "first_name",
  },
  {
    label: "Enter Last Name",
    inputType: "text",
    placeHolder: "Enter last name",
    name: "last_name",
  },
  {
    label: "Phone",
    inputType: "number",
    placeHolder: "Enter phone number",
    name: "phone",
    min: "-1",
  },
  {
    label: "Enter the address",
    inputType: "text",
    placeHolder: "Enter the address",
    name: "address",
  },
  {
    label: "Enter email address",
    inputType: "email",
    placeHolder: "Enter email address",
    name: "email_adrress",
  },
  {
    label: "Password",
    inputType: "password",
    placeHolder: "Create a password",
    name: "password",
  },
  {
    label: "Confirm Password",
    inputType: "password",
    placeHolder: "Confirm password",
    name: "confirm_password",
  },
];

function AddingSupervisor() {
  const { companyID } = useParams();
  const userId = localStorage.getItem("userId");

  const onAddingClick = async (data: any) => {
    if (data.password !== data.confirm_password) {
      console.error("❌ Password and Confirm Password do not match.");
      return;
    }
    console.log(userId);
    console.log(companyID)

    const payload = {
      userId: userId,
      fName: data.first_name,
      lName: data.last_name,
      phone: data.phone,
      address: data.address,
      email: data.email_adrress,
      password: data.password,
      companyId: Number(companyID),
    };

    try {
      const response = await axios.post("https://trucktive.runasp.net/api/Supervisors", payload);
      console.log("✅ Supervisor added successfully:", response.data);
    } catch (error) {
      console.error("❌ Failed to add supervisor:", error);
    }
  };

  return (
    <>
      <BaseFormWindow
        formAttr={addingSupervisorFormAttr}
        formHead="Add New Supervisor"
        buttonName="Add Supervisor"
        submitForm={onAddingClick}
      />
    </>
  );
}

export default AddingSupervisor;
