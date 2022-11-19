import React, { useState } from "react";
import './NewHtmlTable.css'
import TableHeader from "./TableHeader";


const NewHtmlTable = (props) => {
  const data = props.data 
  const columnsKeys = Object.keys(data[0])

  const initialState = {}
  columnsKeys.map( (col) => ( Object.assign(initialState, { [col] : false}) ))
  
  const colCount = columnsKeys.length
  const initColumnsSelected = new Array(colCount);
  
  for(let i = 0; i < colCount; i++){
    initColumnsSelected[i] = true
  }

  const[columnsSelected, setColumnsSelected] = useState(initColumnsSelected)

  const columnsSelectToggle = (colNum) => {
    setColumnsSelected(prev => {
      const updated = prev
      updated[colNum] = ! prev[colNum]
      return updated
    })

    const toggledColHeaderId = `col_${colNum}:row_H`
    const columnElements = document.getElementById( toggledColHeaderId )
    columnElements && columnElements.classList.toggle('selected')
  }

  const cellOnClick = (e) => {
    const colN = e.target.dataset.col
    const rowN = e.target.dataset.row
    
    columnsSelectToggle(colN)

    console.log('D-ATTR col: ', colN,'   D-ATTR row: ',rowN)
  }

  const highLightOn = (e) => {
    const col = e.target.dataset.col
    const elements = document.querySelectorAll(`[data-col="${col}"]`);
    elements.forEach(el => {
      el.classList.add('highlighted')
    })
    // console.log('Highlight: ', elements)
  } 

  const highLightOff = (e) => {
    const col = e.target.dataset.col
    const elements3 = document.querySelectorAll(`[data-col="${col}"]`);
    elements3.forEach(el=> {
      el.classList.remove('highlighted')
    })
    // console.log('Highlight: ', elements3)
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
                onClick={e=>{cellOnClick(e)}}
                onMouseEnter={(e) => highLightOn(e)}
                onMouseLeave={(e) => highLightOff(e)}
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
          <TableHeader cellOnClick={cellOnClick} columnsKeys={columnsKeys} columnsSelected={columnsSelected} />
          {/* { headers(columns) } */}
      </thead>

      <tbody>
          {data.map((row, index) => {
              return rowRender(row, columnsKeys, index)
            } 
          )}
      </tbody>
    </table>
  )
}


export default NewHtmlTable