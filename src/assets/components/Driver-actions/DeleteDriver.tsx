import BaseFormWindow from "../base-components/BaseFormWindow";
import axios from "axios";
import { useState } from "react";
import type { JSX } from 'react';

let deleteDriverFormAttr = [
    {
        label: "Enter Driver ID",
        inputType: "number",
        min: "1",
        placeHolder: "Driver ID",
        name: "id",
    },
];

function DeleteDriver() {
    
    let formhead = "Delete Driver Account"

    const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);

    // const onAddingClick = (data: any) => {
    //     console.log("deleting driver:", data.id);
    // }

    const apiUrl = "https://trucktive.runasp.net/api/Drivers";

    const onDeleteDriverClick = async (data: any) => {
        try {
          const response = await axios.delete(`${apiUrl}/${data.id}`);
      
          if (response.status === 200) {
            setMessageHtml(
              <div style={{ backgroundColor: "#d4edda", padding: "10px", borderRadius: "5px", color: "#155724" }}>
                ✅ Driver has been deleted successfully!
              </div>
            
            );
          } else {
            setMessageHtml(
              <div style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px", color: "#721c24" }}>
                ❌ An error occurred while deleting the driver.
              </div>
            );
          }
        } catch (error: any) {
          setMessageHtml(
            <div style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px", color: "#721c24" }}>
              ❌ {error.response?.data?.message || "An unexpected error occurred."}
            </div>
          );
        }
      };

    return(
        <>
         <BaseFormWindow formAttr={deleteDriverFormAttr} formHead= {formhead} buttonName="Delete" submitForm={onDeleteDriverClick}
          messageHtml={messageHtml} />
        </>
    )
}
export default DeleteDriver;