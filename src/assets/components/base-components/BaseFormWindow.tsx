import Closing from "./Closing";
import BaseButton from "./BaseButton";


interface FormItem {
    label: string;
    inputType: string;
    placeHolder: string;
  }
  
  type FormArr = FormItem[];

const formAttr: FormArr = [
    {
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },
    {
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },{
        label: "labelName",
        inputType: "type",
        placeHolder: "Enter..",
    },
];


function BaseFormWindow() {

    const confirmAddCompany = () =>{
        console.log("company added successfuly..");
    }

    return(
        <>
        
        <div className="base-actions-window">

            <Closing />
            <div style={{textAlign:"center", margin:"0 auto", width:"fit-content"}} > <h1>Add New Company</h1> </div> 
            
            <div className="company-form-div">
            <form className="company-form">
                {/* <div className="form-attr">
                 <label htmlFor="name">Company Name</label>
                 <input type="text" id="name" name="companyName" placeholder="Enter Company Name.." />
                </div>

                <div className="form-attr">
                 <label htmlFor="email">Email Address</label>
                 <input type="text" id="email" name="companyEmail" placeholder="Enter Company Email.." />
                </div>

                <div className="form-attr">
                 <label htmlFor="phone">Phone</label>
                 <input type="text" id="phone" name="companyPhone" placeholder="Enter Company Phone.." />
                </div>

                <div className="form-attr">
                 <label htmlFor="address">Address</label>
                 <input type="text" id="address" name="companyAddress" placeholder="Enter Company Address.." />
                </div> */}

                {formAttr.map((attr) => (
                    <div className="form-attr">
                    <label htmlFor="name">{attr.label}</label>
                    <input type={attr.inputType} id="name" name="companyName" placeholder={attr.placeHolder} />
                   </div>
                ) )}



            </form>
            </div>
            <div style={{margin:"10px auto", width:"fit-content"}}>
            <BaseButton name="Add Company" className="admin-confirm-adding-button" baseButtonOnClick={confirmAddCompany} />
            </div>

        </div>
        </>
    )
}

export default BaseFormWindow;