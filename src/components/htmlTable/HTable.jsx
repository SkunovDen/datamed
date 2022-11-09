import React, { useState } from "react";
import './HTable.css'


// import mockMedData from "../../store/mockMedData";

const HTable = (props) => {

  const data = props.data 
  const columns = Object.keys(data[0])

  const initialState = {}
  
  columns.map( col => ( Object.assign(initialState, { [col] : false}) ))
  
  // console.log('init', initialState)
  

  const [selectedColumns, setSelectedColumns] = useState(initialState)


  const headers = (keys, selectedColumnsState) => {
    return(
      <tr className="header">
          { keys.map((key) => {
            
            return ( <th 
                        key={key} 
                        onClick={(e) => { selectToggle(e)} }
                        >
                          {key}
                      </th> )
          })}
      </tr>
    )
  }

  const rowRender = (row, keys, index) => {
    return(
      <tr key={index}>
        { keys.map((key) => {
          return (    
            <td key={key}  style={{whiteSpace :'nowrap'}}>
              {row[key]}
            </td> 
          )
        })}
      </tr>
    )
  }


  const selectToggle = (e) => {
    const toggleKey = e.target.textContent

    setSelectedColumns((prevState => { 
      console.log('PREV: ', prevState, '  KEY', toggleKey , 'STATE ', prevState[toggleKey])
      const upd = prevState 
            upd[toggleKey] = !prevState[toggleKey]
      console.log('upd ', upd)

      return upd
    }))
  }
 

  return(
    <table>
      <thead>
                  
          { headers(columns, selectedColumns) }
        
      </thead>
      <tbody>
        
          {data.map((row, index) => {
            return rowRender(row, columns, index)
            } )}

      </tbody>
    </table>
    )
}


export default HTable