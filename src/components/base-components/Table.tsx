import React from 'react';

type TableProps = {
    headers: string[];
    data: any[];
    onRowClick?: (rowData: any) => void;
  };



function Table( {headers, data, onRowClick}:TableProps) {

    

    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} onClick={() => onRowClick && onRowClick(row)}>
                        {Object.values(row).map((cell, cellIndex) => {
                            const isJSX = typeof cell === 'object' && cell !== null && React.isValidElement(cell);
                            return (
                                <td key={cellIndex}>
                                    {isJSX ? cell : String(cell)}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;