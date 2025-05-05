import BaseFormWindow from "../base-components/BaseFormWindow";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { JSX } from 'react';

let selectDriverFormAttr = [
    {
        label: "Enter Driver ID",
        inputType: "number",
        min: "1",
        placeHolder: "Driver ID",
        name: "id",
    },
];

function SelectDriverById() {
    
    const navigate = useNavigate();
    const [messageHtml, setMessageHtml] = useState<JSX.Element | null>(null);
    const [driverData, setDriverData] = useState<any | null>(null);
    const apiUrl = "https://trucktive.runasp.net/api/Drivers";

    const onSelectClick = async (data: any) => {
        try {
            const response = await axios.get(`${apiUrl}/${data.id}`);
            setDriverData(response.data);
            navigate(`${data.id}`, { state: response.data });
            console.log(driverData);
            setMessageHtml(null);
        } catch (error) {
            setDriverData(null);
            // alert("Driver not found");
            setMessageHtml(<div style={{backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px", color: "#721c24" }}>Driver not found or error fetching data.</div>);
        }
    }

    



    return(
        <>
         <BaseFormWindow formAttr={selectDriverFormAttr} formValues={driverData} formHead="Enter driver ID for edit" buttonName="Select" submitForm={onSelectClick} messageHtml={messageHtml} />
         <Outlet />
        </>
    )
}
export default SelectDriverById;