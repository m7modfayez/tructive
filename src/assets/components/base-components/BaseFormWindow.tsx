import { useState } from "react";
import type { JSX } from 'react';
import Closing from "./Closing";
import BaseButton from "./BaseButton";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";


type FormAttr = {
    label: string;
    inputType: string;
    min?: string
    placeHolder: string;
    name: string;
    value?: any;
  };
  
  type Props = {
    formAttr: FormAttr[];
    formHead: string;
    buttonName: string;
    submitForm: (data: Record<string, string>) => void;
    formValues: Record<string, string>;
    setFormValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    messageHtml?: JSX.Element | null;
  };

// const formAttr: FormArr = [
//     {
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },
//     {
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },{
//         label: "labelName",
//         inputType: "type",
//         placeHolder: "Enter..",
//     },
// ];


function BaseFormWindow({formAttr, formValues, formHead, buttonName, submitForm, messageHtml}: Props) {

    const [formData, setFormData] = useState<Record<string, string>>(formValues || {});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }; 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm(formData);
      };

    return(
        <>
        
        <div className="base-actions-window">

            <Closing />
            <div style={{textAlign:"center", margin:"0 auto", width:"fit-content"}}> <h1>{formHead}</h1> </div> 
            
            <div className="company-form-div">
            <form className="company-form" onSubmit={handleSubmit}>
                {formAttr.map((attr) => (
                    <div className="form-attr" key={attr.name}>
                    <label htmlFor="name">{attr.label}</label>
                    <input
                     type={attr.inputType}
                     min={attr.min}
                     id= {attr.name} 
                     name= {attr.name}
                     value={formData[attr.name] || ""}
                     placeholder={attr.placeHolder}
                     onChange={handleChange} 
                     />
                   </div>
                ) )}
                
                
               {/* here is success and error message. */}
                <div style={{width:"90%",}}>
                {messageHtml && <div style={{ marginTop: "10px" }}>{messageHtml}</div>}
                </div>

            <div style={{width: "100%", marginTop: "20px", textAlign: "center",}}>
                <BaseButton name={buttonName} className="admin-confirm-adding-button" />
            </div>


            </form>
            </div>
            <div style={{margin:"10px auto", width:"fit-content"}}>
            {/* <BaseButton name={buttonName} className="admin-confirm-adding-button" /> */}
            </div>

        </div>
        </>
    )
}

export default BaseFormWindow;