
type TableProps = {
    headers: string[];
    data: Array<Record<string, any>>;
    // data: any;
    className?: string;
    onRowClick?: (rowData: any) => void;
  };



function Table( {headers, data, className, onRowClick}:TableProps) {

    

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
                    <tr key={rowIndex} onClick={onRowClick ? () => onRowClick(row) : undefined}>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex}>{row[header]}</td>
                        ))}
                    </tr>
                ))}


            </tbody>
          </table>
          </div>


        </>
    )
}

export default Table;