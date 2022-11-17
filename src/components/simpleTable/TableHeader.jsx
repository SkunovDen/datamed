import React from "react";
import styled from "styled-components";

const StyledTh = styled.th`
  background : ${props => props.selected ? 'lightsteelblue' : 'white'}
`

const TableHeader = (props) => {
    const columnsKeys = props.columnsKeys
    const columnsSelected= props.columnsSelected

    return(
        <tr className="header">{ 
            columnsKeys.map((columnKey, columnIndex) => { 
              const id      = `col_${columnIndex}:row_H`;
              const colData = `${columnIndex}`
  
              const rowData = `${'H'}`
              
              return ( 
                <StyledTh 
                    id={id}
                    selected={columnsSelected[columnIndex]}
                    key={columnKey} 
                    data-col={colData} data-row={rowData}
                    
                    onClick={(e) => {props.cellOnClick(e)}}
                >
                  {columnKey}
                </StyledTh> 
              )
            })
          }
        </tr>
      )
}


export default TableHeader