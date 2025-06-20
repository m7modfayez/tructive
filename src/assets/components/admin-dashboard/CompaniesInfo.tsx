import { FaTruck } from "react-icons/fa";
import CardInfo from "../base-components/CardsInfo";
import { useState, useEffect } from "react";
import axios from "axios";

interface props {
    onTotalCompaniesClick:  () => void;
}

function CompaniesInfo({ onTotalCompaniesClick }: props) {
  const [companiesLength, setCompaniesLength] = useState(null);
  let [mostDriversCompany, setMostDriversCompany] = useState<any>(null);
  let [leastDriversCompany, setLeastDriversCompany] = useState<any>(null);


  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("https://trucktive.runasp.net/api/Companies");
        const companies = response.data;
        setCompaniesLength(companies.length);

        let maxDriversCompany = companies[0];
        for (let company of companies) {
          if (company.driversCount > maxDriversCompany.driversCount) {
            maxDriversCompany = company;
          }
        }

         let leastDriversCompany = companies[0];
        for (let company of companies) {
          if (company.driversCount < leastDriversCompany.driversCount) {
            leastDriversCompany = company
          }
        }

        console.log("most" ,maxDriversCompany)
        setMostDriversCompany(maxDriversCompany);
        setLeastDriversCompany(leastDriversCompany);

      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };

    fetchCompanies();
  }, []);

//   const singleCompanyLength = mostDriversCompany.driversCount;
//   const singleLeastCompanyLength = leastDriversCompany.driversCount;
  
  

  const total_card = {
    cardName: "Total Companies",
    number: companiesLength,
    icon: <FaTruck size={70} style={{ margin: '20px', float: 'right' }} />
  };

  const best_card = {
    cardName: "Most Drivers Company",
    number: mostDriversCompany?.driversCount,
    name: mostDriversCompany?.name
  };

    const worst_card = {
      cardName: "Least Active Company",
      number: leastDriversCompany?.driversCount, 
      name: leastDriversCompany?.name }

    
        


    return(
        <>
          <CardInfo onChildClick={onTotalCompaniesClick} totalCard={total_card} bestCard={best_card} worstCard={worst_card} />
        </>
    )
}

export default CompaniesInfo;