import React, { useState } from "react";
import './SimpleTable.css'
import TableHeader from "./TableHeader";


const SimpleTable = (props) => {
  const data = props.data 
  // console.log('Simple Table data input:',data)

  const columnsDataKeys = Object.keys(data[0])


  columnsDataKeys.map( (col) => ( Object.assign({}, { [col] : false}) ))
 
  const colCount = columnsDataKeys.length
  const initSelectedColumns = new Array(colCount);
  
  for(let i = 0; i < colCount; i++){
    initSelectedColumns[i] = false
  }

  const[selectedColumns, setSelectedColumns] = useState(initSelectedColumns)
  
  const selectedColumnsFromStore = props.selectedColumns



  const columnsSelectToggle = (colNum) => {
     setSelectedColumns(prev => (prev.map( 
        (el, index) => ( Number(colNum) === index ? !el : el ))))
  }

  const cellOnClick = (e) => {
    const colN = e.target.dataset.col

    console.log('TOGGLE : ', colN)

    props.toggleColumn(colN)
    // columnsSelectToggle(colN)
  }

  //TODO
  const highLightOn = (e) => {
    const col = e.target.dataset.col
    const elements = document.querySelectorAll(`[data-col="${col}"]`);
    elements.forEach(el => {
      el.classList.add('highlighted')
    })
  } 

//TODO
  const highLightOff = (e) => {
    const col = e.target.dataset.col
    const elements = document.querySelectorAll(`[data-col="${col}"]`);
    elements.forEach(el=> {
      el.classList.remove('highlighted')
    })
  } 

  const rowRender = (row, keys, row_index) => {
    return(
      <tr key={row_index}>
        { keys.map((key, col_index) => {
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
            cellOnClick={cellOnClick} 
            columnsKeys={columnsDataKeys}
            columnsSelected={selectedColumnsFromStore} />
      </thead>

      <tbody>
          {data.map( (row, index) => rowRender(row, columnsDataKeys, index) )}
      </tbody>
    </table>
  )
}


export default SimpleTable