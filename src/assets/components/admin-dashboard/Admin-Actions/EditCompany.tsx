import Closing from "../../base-components/Closing";
import BaseButton from "../../base-components/BaseButton";
import { useParams } from "react-router-dom";





function EditCompanyWindow() {

    const {id} = useParams();
    const confirmEditingCompany = () =>{
        console.log("company edited successfuly..", {id});
    }


    return(
        <>
        
        <div className="base-actions-window">

            <Closing />
            <div style={{textAlign:"center", margin:"0 auto", width:"fit-content"}} > <h1>Edit Company {id} </h1> </div> 
            
            <div className="company-form-div">
            <form className="company-form">
                <div className="form-attr">
                 <label htmlFor="name">Edit Company Name</label>
                 <input type="text" id="name" name="companyName" placeholder="Enter Company Name.." />
                </div>

                <div className="form-attr">
                 <label htmlFor="email">Edit Email Address</label>
                 <input type="text" id="email" name="companyEmail" placeholder="Enter Company Email.." />
                </div>

                <div className="form-attr">
                 <label htmlFor="phone">Edit Phone</label>
                 <input type="text" id="phone" name="companyPhone" placeholder="Enter Company Phone.." />
                </div>

                <div className="form-attr">
                 <label htmlFor="address">Edit Address</label>
                 <input type="text" id="address" name="companyAddress" placeholder="Enter Company Address.." />
                </div>

            </form>
            </div>
            <div style={{margin:"10px auto", width:"fit-content"}}>
            <BaseButton name="Edit Company" className="admin-confirm-adding-button" baseButtonOnClick={confirmEditingCompany} />
            </div>

        </div>
        </>
    )
}

export default EditCompanyWindow;