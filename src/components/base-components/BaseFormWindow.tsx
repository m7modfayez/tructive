import { useState } from "react";
import type { JSX } from 'react';


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
    formValues?: Record<string, string>;
    setFormValues?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
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
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{formHead}</h2>
                    <button className="modal-close" onClick={() => window.history.back()}>
                        ×
                    </button>
                </div>
                
                <div className="modal-body">
                    <form onSubmit={handleSubmit} className="form-layout">
                        <div className="form-grid-2">
                            {formAttr.map((attr) => (
                                <div className="form-group" key={attr.name}>
                                    <label htmlFor={attr.name} className="form-label">{attr.label}</label>
                                    <input
                                        type={attr.inputType}
                                        min={attr.min}
                                        id={attr.name}
                                        name={attr.name}
                                        value={formData[attr.name] || ""}
                                        placeholder={attr.placeHolder}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Success and error messages */}
                        {messageHtml && (
                            <div className="mt-4">
                                {messageHtml}
                            </div>
                        )}
                        
                        <div className="form-actions">
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={() => window.history.back()}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                {buttonName}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BaseFormWindow;