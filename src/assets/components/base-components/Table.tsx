
type TableProps = {
    headers: string[];
    data: Array<Record<string, any>>;
    // data: any;
    className?: string;
  };



function Table( {headers, data, className}:TableProps) {

    

    return(
        <>
          <div className="table-div">
          <table className={`driver-table ${className}`}>
  
            <thead>
            <tr>

                {headers.map((header, index) => (
                    <th key={index} >{header}</th>
                ))}

            </tr>
            </thead>
            <tbody>

                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex}>{row[header]}</td>
                        ))}
                    </tr>
                ))}

                {/* {companies.map((company, index) =>(
                     <tr key={index}>
                     <td>{company.id}</td>
                     <td>{company.name}</td>
                     <td>{company.total_supervisor}</td>
                     <td>{company.total_drivers}</td>
                     <td>{company.contract_date}</td>
                   </tr>
                ) )  } */}

            </tbody>
          </table>
          </div>

          {/* <table className="driver-list-table">
            <thead>
            <tr>
              <th>Driver ID</th>
              <th>Driver Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Email Address</th>
            </tr>
            </thead>
            <tbody>
                {driversTable.map((driver, index) =>(
                     <tr key={index}>
                     <td>{driver.id}</td>
                     <td>{driver.name}</td>
                     <td>{driver.vehicleID}</td>
                     <td>{driver.overSpeed}</td>
                     <td>{driver.harshAcce}</td>
                   </tr>
                ) )  }
            </tbody>
          </table>
           */}

        </>
    )
}

export default Table;