import React, { useState } from "react";
import './NewHtmlTable.css'


const NewHtmlTable = (props) => {

  const data = props.data 
  const columns = Object.keys(data[0])

  const initialState = {}
  columns.map( col => ( Object.assign(initialState, { [col] : false}) ))
  
  const colCount = columns.length
  const initColumnsSelect = new Array(colCount);
  
  for(let i = 0; i < colCount; i++){
    initColumnsSelect[i] = true
  }

  const[columnsSelect, setColumnsSelect] = useState(initColumnsSelect)

  const columnsSelectToggle = (colNum) => {
    setColumnsSelect(prev => {
      const updated = prev
      updated[colNum] = ! prev[colNum]
      return updated
    })
    const toggleKey = `col_${colNum}:row_H`
    console.log('Toggle key: ', toggleKey)
    document.getElementById( toggleKey ).classList.toggle('selected')
  }

  const cellClick = (e) => {
    const id = e.target.id
    const [col, row] = id.split(':')
    const colN = col.split('_')[1]
    const rowN = row.split('_')[1]
    console.log('COL : ', col.split('_')[1], '   ROW: ', row.split('_')[1])

    console.log('Toggle column: ', colN)
    columnsSelectToggle(colN)
  }

  const headers = (keys) => {
    return(
      <tr className="header">{ 
        keys.map((key, index) => { 
            const id = `col_${index}:row_H`;

            return ( 
              <th key={key} data-col={key} id={id}
                  onClick={e=>{cellClick(e)}}>
                {key}
              </th> 
            )
          })
        }
      </tr>
    )
  }

  const rowRender = (row, keys, row_index) => {
    return(
      <tr key={row_index}>
        { keys.map((key, col_index) => {
          const id = `col_${col_index}:row_${row_index}`;
          return (    
            <td key={key}
                id={id} 
                style={{whiteSpace :'nowrap'}}
                onClick={e=>{cellClick(e)}}>
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