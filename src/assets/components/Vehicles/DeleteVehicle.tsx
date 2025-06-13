import BaseFormWindow from "../base-components/BaseFormWindow";
import axios from "axios";
import { useState } from "react";
import type { JSX } from "react";

const deleteDriverFormAttr = [
  {
    label: "Enter Vehicle ID",
    inputType: "number",
    min: "1",
    placeHolder: "Vehicle ID",
    name: "id",
  },
];

function DeleteVehicle() {
  const formhead = "Delete Vehicle";
  const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);

  const onDeleteVehicleClick = async (data: any) => {
    const userId = localStorage.getItem("userId"); // if stored in login
    if (!userId) {
      setMessageHtml(
        <div
          style={{
            backgroundColor: "#f8d7da",
            padding: "10px",
            borderRadius: "5px",
            color: "#721c24",
          }}
        >
          ❌ User ID not found in local storage.
          you must login first.
        </div>
      );
      return;
    }

    const apiUrl = `https://trucktive.runasp.net/api/Vehicles/${data.id}/user/${userId}`;

    try {
      const response = await axios.delete(apiUrl);

      if (response.status === 200) {
        setMessageHtml(
          <div
            style={{
              backgroundColor: "#d4edda",
              padding: "10px",
              borderRadius: "5px",
              color: "#155724",
            }}
          >
            ✅ Vehicle has been deleted successfully!
          </div>
        );
        setTimeout(() => window.location.reload(), 2500)
      } 
        else {
        setMessageHtml(
          <div
            style={{
              backgroundColor: "#f8d7da",
              padding: "10px",
              borderRadius: "5px",
              color: "#721c24",
            }}
          >
            ❌ An error occurred while deleting the Vehicle.
          </div>
        );
      }
    } catch (error: any) {
      setMessageHtml(
        <div
          style={{
            backgroundColor: "#f8d7da",
            padding: "10px",
            borderRadius: "5px",
            color: "#721c24",
          }}
        >
          ❌ {error.response?.data?.message || "An unexpected error occurred."}
        </div>
      );
    }
  };

  return (
    <>
      <BaseFormWindow
        formAttr={deleteDriverFormAttr}
        formHead={formhead}
        buttonName="Delete"
        submitForm={onDeleteVehicleClick}
        messageHtml={messageHtml}
      />
    </>
  );
}

export default DeleteVehicle;
