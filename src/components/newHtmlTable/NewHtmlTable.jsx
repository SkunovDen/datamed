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
  console.log('Arr: ', initColumnsSelect)

  const[columnsSelect, setColumnsSelect] = useState(initColumnsSelect)

  const cellClick = (e) => {
    const id = e.target.id
    const [col, row] = id.split(':')
    console.log('COL : ', col.split('_')[1], '   ROW: ', row.split('_')[1])

  }

  const headers = (keys) => {
    return(
      <tr className="header">{ 
        keys.map((key, index) => { 
            const id = `col_${index}:row_H`;
            
            return ( 
              <th key={key} data-col={key} id={id}
                  className = {initColumnsSelect[index] ? 'highlighted' : ''}
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