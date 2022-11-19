import React from "react";
import './SimpleTable.css'
import TableHeader from "./TableHeader";


const SimpleTable = (props) => {

  if (props.data.length < 2){
    return "TABLE DATA EMPTY "
  }
  const columnsDataNames = props.data[0]
  const data = props.data.slice(1) 

  const columnsDataKeys = Object.keys(data[0])

  const selectedColumnsFromStore = props.selectedColumns
  
  const cellOnClick = (e, f) => {
    console.log(e)
    console.log(f)
    const colN = e.target.dataset.col
    props.toggleColumn(colN)
  }

  //TODO

  // const highLightOn = (e) => {
  //   const col = e.target.dataset.col
  //   const elements = document.querySelectorAll(`[data-col="${col}"]`);
  //   elements.forEach(el => {
  //     el.classList.add('highlighted')
  //   })
  // } 

//TODO

  // const highLightOff = (e) => {
  //   const col = e.target.dataset.col
  //   const elements = document.querySelectorAll(`[data-col="${col}"]`);
  //   elements.forEach(el=> {
  //     el.classList.remove('highlighted')
  //   })
  // } 

  const rowRender = (row, columnsKeys, row_index) => {
    return(
      <tr key={row_index}>
        { columnsKeys.map((key, col_index) => {
          const id = `col_${col_index}:row_${row_index}`;

          const colData = `${col_index}`          
          const rowData = `${row_index}`

          return (    
            <td key={key}
                data-col={colData} 
                data-row={rowData}
                id={id} 
                onClick={e => { props.toggleColumn(e.target.dataset.col) }}
                // onMouseEnter={(e) => highLightOn(e)}
                // onMouseLeave={(e) => highLightOff(e)}
              >

              {row[key]}

            </td> 
          )
        })}
      </tr>
    )
  }

  return(
    <table>
      <thead>                 
          <TableHeader 
            columnsKeys={columnsDataNames}
            columnsSelected={selectedColumnsFromStore}
            cellOnClick={cellOnClick}  />
      </thead>

      <tbody>
          {data.map( (row, index) => rowRender(row, columnsDataKeys, index) )}
      </tbody>
    </table>
  )
}


export default SimpleTable