import BaseFormWindow from "../../base-components/BaseFormWindow";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";




function EditSupervisor() {

    const location = useLocation();
    const supervisorData = location.state;

    const addingSupervisorFormAttr = [
        {
            label: "Enter First Name",
            inputType: "text",
            placeHolder: "Enter first name",
            name: "first name",
            value: supervisorData.name
        },
        {
            label: "Enter Last Name",
            inputType: "text",
            placeHolder: "Enter last name",
            name: "last name"
        },{
            label: "Phone",
            inputType: "text",
            placeHolder: "Enter phone number",
            name: "phone",
            value: supervisorData.phone,
        },{
            label: "Enter the address",
            inputType: "text",
            placeHolder: "Enter the address",
            name: "address"
        },{
            label: "Enter email address",
            inputType: "email",
            placeHolder: "Enter email address",
            name: "email adrress",
            value: supervisorData.email
        },{
            label: "Password",
            inputType: "password",
            placeHolder: "Crate a password",
            name: "password",
        },{
            label: "Confirm Password",
            inputType: "password",
            placeHolder: "Confirm password",
            name: "confirm password",
        }
    ];
    
    
    console.log(supervisorData);

    const onEditClick = (data: any) => {
        console.log("save changes", data);
    }
    const {id} = useParams();
    const formhead = `Edit Supervisor ${id}`

    return(
        <>
         <BaseFormWindow formAttr={addingSupervisorFormAttr} formHead= {formhead} buttonName="Save Changes" submitForm={onEditClick}  />
        </>
    )
}
export default EditSupervisor;