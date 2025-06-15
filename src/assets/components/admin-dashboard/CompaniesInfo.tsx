import { FaTruck } from "react-icons/fa";
import CardInfo from "../base-components/CardsInfo";
import { useState, useEffect } from "react";
import axios from "axios";

interface props {
    onTotalCompaniesClick:  () => void;
}


function CompaniesInfo({onTotalCompaniesClick}:props ) {


    const [companiesLength, setCompaniesLength] = useState(null);
    
      useEffect(() => {
          const fetchDrivers = async () => {
             try {
                const response = await axios.get("https://trucktive.runasp.net/api/Companies");
                setCompaniesLength(response.data.length);
               
             } catch (err) {
                console.error("Error fetching companies:", err);
             }
          };
    
          fetchDrivers();
       }, []);

    const total_card = {cardName: "Total Companies", number: companiesLength, icon: <FaTruck size={70} style={{ margin:'20px', float: 'right',}} /> }
    const best_card = {cardName: "Most Active Company", number: 88, name: "Banda" }
    const worst_card = {cardName: "Least Active Company", number: 5, name: "Johayna" }

    
        


    return(
        <>
          <CardInfo onChildClick={onTotalCompaniesClick} totalCard={total_card} bestCard={best_card} worstCard={worst_card} />
        </>
    )
}

export default CompaniesInfo;