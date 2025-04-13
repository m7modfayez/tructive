import Closing from "./Closing";
import BaseButton from "./BaseButton";


type FormAttr = {
    label: string;
    inputType: string;
    placeHolder: string;
    name: string;
  };
  
  type Props = {
    formAttr: FormAttr[];
    formHead: string;
    buttonName: string;
    submitForm: () => void;
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


function BaseFormWindow({formAttr, formHead, buttonName, submitForm}: Props) {

    

    return(
        <>
        
        <div className="base-actions-window">

            <Closing />
            <div style={{textAlign:"center", margin:"0 auto", width:"fit-content"}} > <h1>{formHead}</h1> </div> 
            
            <div className="company-form-div">
            <form className="company-form">
                {formAttr.map((attr) => (
                    <div className="form-attr" key={attr.name}>
                    <label htmlFor="name">{attr.label}</label>
                    <input type={attr.inputType}  id="name" name="companyName" placeholder={attr.placeHolder} />
                   </div>
                ) )}

            {/* <BaseButton name="Add Company" className="admin-confirm-adding-button" baseButtonOnClick={confirmAddCompany} /> */}


            </form>
            </div>
            <div style={{margin:"10px auto", width:"fit-content"}}>
            <BaseButton name={buttonName} className="admin-confirm-adding-button" baseButtonOnClick={submitForm} />
            </div>

        </div>
        </>
    )
}

export default BaseFormWindow;