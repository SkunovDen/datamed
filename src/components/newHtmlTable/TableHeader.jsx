import React from "react";


const TableHeader = (props) => {
    const columnsKeys = props.columnsKeys

    return(
        <tr className="header">{ 
            columnsKeys.map((key, index) => { 
              const id = `col_${index}:row_H`;
              const colData = `C_${index}`
  
              const rowData = `${'H'}`
              return ( 
                <th key={key} 
                    data-col={colData} 
                    data-row={rowData}
                    id={id}
                    // className={props.columnsSelected[key]? 'selected' :''}
                    onClick={(e) => {props.cellOnClick(e)}}
                    >
                  {key}
                </th> 
              )
            })
          }
        </tr>
      )
}


export default TableHeader