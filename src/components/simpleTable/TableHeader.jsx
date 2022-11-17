import React, { useState } from "react";




const TableHeader = (props) => {
    const columnsKeys = props.columnsKeys
    const columnsSelected= props.columnsSelected

    return(
        <tr className="header">{ 
            columnsKeys.map((columnKey, columnIndex) => { 
              const id      = `col_${columnIndex}:row_H`;
              const colData = `C_${columnIndex}`
  
              const rowData = `${'H'}`
              
              return ( 
                <th 
                    id={id}

                    key={columnKey} 
                    data-col={colData} data-row={rowData}
                    
                    onClick={(e) => {props.cellOnClick(e)}}
                >
                  {columnKey}
                </th> 
              )
            })
          }
        </tr>
      )
}


export default TableHeader