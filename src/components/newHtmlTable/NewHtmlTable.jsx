import React, { useState } from "react";
import './NewHtmlTable.css'


const NewHtmlTable = (props) => {
  const tableName = props.tableName

  const data = props.data 
  const columns = Object.keys(data[0])

  const initialState = {}
  columns.map( (col) => ( Object.assign(initialState, { [col] : false}) ))
  
  const colCount = columns.length
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
    // console.log('Toggle key: ', toggleKey)
    const columnElements = document.getElementById( toggledColHeaderId )
    columnElements && columnElements.classList.toggle('selected')
  }

  const cellOnClick = (e) => {
    const colN = e.target.dataset.col
    const rowN = e.target.dataset.row
    
    columnsSelectToggle(colN)

    console.log('D-ATTR col: ', colN,'   D-ATTR row: ',rowN)
  }

  const headers = (keys) => {
    return(
      <tr className="header">{ 
        keys.map((key, index) => { 
            const id = `col_${index}:row_H`;
            const colData = `C_${index}`

            const rowData = `${'H'}`
            return ( 
              <th key={key} 
                  data-col={colData} 
                  data-row={rowData}
                  id={id}
                  onClick={e=>{cellOnClick(e)}}>
                {key}
              </th> 
            )
          })
        }
      </tr>
    )
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
                // style={{whiteSpace :'nowrap'}}
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
          { headers(columns) }
      </thead>

      <tbody>
          {data.map((row, index) => {
              return rowRender(row, columns, index)
            } 
          )}
      </tbody>
    </table>
  )
}


export default NewHtmlTable