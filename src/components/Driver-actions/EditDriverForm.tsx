import { useState } from "react";
import axios from "axios";
import { JSX } from "react";
import BaseFormWindow from "../base-components/BaseFormWindow";
import { useLocation, useParams } from "react-router-dom";

function EditDriverForm() {
  // بيانات السائق المرسَلة من الصفحة السابقة
  const { state: driver } = useLocation() as { state: any };
  const { id } = useParams();

  const companyId = localStorage.getItem("companyId");
  const userId    = localStorage.getItem("userId");

  const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);

  const [formData, setFormData] = useState<Record<string, string>>({
    "first name":  driver?.fName  ?? "",
    "last name":   driver?.lName  ?? "",
    phone:         driver?.phone  ?? "",
    address:       driver?.address?? "",
    "email adrress": driver?.email?? "",
    password: "",
    "confirm password": "",
  });

  const formAttr = [
    { label: "Enter First Name", inputType: "text",  placeHolder: "Enter first name",  name: "first name" },
    { label: "Enter Last Name",  inputType: "text",  placeHolder: "Enter last name",   name: "last name"  },
    { label: "Phone",            inputType: "text",  placeHolder: "Enter phone number",name: "phone"      },
    { label: "Enter the address",inputType: "text",  placeHolder: "Enter the address", name: "address"    },
    { label: "Enter email address",inputType: "email",placeHolder: "Enter email address", name: "email adrress" },
  ];

  const onSaveClick = async (data: Record<string, string>) => {
    if (!companyId) {
      setMessageHtml(<div>Company ID missing — log in again.</div>);
      return;
    }

    try {
      const payload = {
        userId,                          // قد لا يطلبه الـ API، أزِله لو غير لازم
        fName:   data["first name"],
        lName:   data["last name"],
        phone:   data.phone,
        address: data.address,
        email:   data["email adrress"],  // المفتاح الصحيح
      };

      const res = await axios.put(
        `https://trucktive.runasp.net/api/Drivers/${id}?companyId=${companyId}`,
        payload
      );

      console.log("Driver updated:", res.data);

      setMessageHtml(
        <div style={{ backgroundColor: "#d4edda", padding: 10, borderRadius: 5, color: "#155724" }}>
          ✅ Driver has been updated successfully!
        </div>
      );
    } catch (error) {
      console.error("Error updating driver:", error);
      setMessageHtml(
        <div style={{ backgroundColor: "#f8d7da", padding: 10, borderRadius: 5, color: "#721c24" }}>
          ❌ An error occurred while updating the driver.
        </div>
      );
    }
  };

  return (
    <BaseFormWindow
      formAttr={formAttr}
      formValues={formData}
      setFormValues={setFormData}
      formHead={`Edit Driver ${id}`}
      buttonName="Save Changes"
      submitForm={onSaveClick}
      messageHtml={messageHtml}
    />
  );
}

export default EditDriverForm;
