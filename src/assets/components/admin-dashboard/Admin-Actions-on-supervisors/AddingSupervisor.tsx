import BaseFormWindow from "../../base-components/BaseFormWindow";
import { useParams } from "react-router-dom";

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
        name: "last_name"
    },{
        label: "Phone",
        inputType: "number",
        placeHolder: "Enter phone number",
        name: "phone",
        min: "-1"
    },{
        label: "Enter the address",
        inputType: "text",
        placeHolder: "Enter the address",
        name: "address"
    },{
        label: "Enter email address",
        inputType: "email",
        placeHolder: "Enter email address",
        name: "email_adrress"
    },{
        label: "Password",
        inputType: "password",
        placeHolder: "Crate a password",
        name: "password",
    },
    {
        label: "Confirm Password",
        inputType: "password",
        placeHolder: "Confirm password",
        name: "confirm_password",
    }
];

function AddingSupervisor() {
    
    const {name, companyID} = useParams();
  

    const onAddingClick = (data: any) => {
        console.log("adding supervisor", data);
        console.log(`adding supervisor to company ${name} which has id: ${companyID} `);
        // console.log("form data => ", data);
        if(data.password != data.confirm_password)
        {
            console.log("Password and Confirm Password do not match.")
        }
        else{
            console.log("passwords matches")
        }
    }

    return(
        <>
         <BaseFormWindow formAttr={addingSupervisorFormAttr} formHead= "Add New Supervisor" buttonName="Add Supervisor" submitForm={onAddingClick}  />
        </>
    )
}
export default AddingSupervisor;