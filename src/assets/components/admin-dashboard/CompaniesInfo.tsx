import { FaTruck } from "react-icons/fa";
import CardInfo from "../base-components/CardsInfo";

interface props {
    onTotalCompaniesClick:  () => void;
}


function CompaniesInfo({onTotalCompaniesClick}:props ) {



    const total_card = {cardName: "Total Companies", number: 10, icon: <FaTruck size={70} style={{ margin:'20px', float: 'right',}} /> }
    const best_card = {cardName: "Most Active Company", number: 88, name: "Banda" }
    const worst_card = {cardName: "Least Active Company", number: 5, name: "Johayna" }


    return(
        <>
          <CardInfo onChildClick={onTotalCompaniesClick} totalCard={total_card} bestCard={best_card} worstCard={worst_card} />
        </>
    )
}

export default CompaniesInfo;