import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";



import { useSelector } from 'react-redux'
import ToolBar from "../components/nav/ToolBar";
import { tableDataSelector } from '../store/selectors'
// import { addRow, removeRow, testReducer } from '../store/tableDataSlice'

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const TableViewPage = () => {

    const tableData = useSelector(tableDataSelector)

    const colNames = tableData[0]
    const bodyData  = tableData.filter(item => item !== colNames)



    // const dispatch = useDispatch()

    const styles = { 
        noWrap : { whiteSpace: 'nowrap', padding: '0 17px 0 17px' }
    }

    const TableComponent = () => {
        return (

            <Table striped bordered hover size="sm">
                            <thead >
                                <tr style={{position: "sticky", top: "0", backgroundColor : 'lightblue'}}> 
                                    {   colNames.map((colName,index) => {
                                            return <th key ={index} style={styles.noWrap}>
                                                    {colName}
                                                    </th>})
                                    }
                                </tr>
                            </thead>

                            <tbody>
                                { bodyData.map((rowData, rowIndex) => {
                                        return(
                                                <tr key={rowIndex}>
                                                    {rowData.map( (cellData, colIndex) => {
                                                        return <td key={colIndex} style={styles.noWrap}>
                                                            
                                                            { cellData }
                                                            
                                                        </td>   })
                                                    }
                                                </tr>)
                                    })
                                }
                            </tbody>
                        </Table>
            )
    }

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Original', value: '1' },
        { name: 'Transformed', value: '2' },
      ];

    const TableSelectorComponent = () => {
        return(
            <ButtonGroup>
                {radios.map((radio, idx) => (
                <ToggleButton
                size="sm"
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup>

        )
    }
            

    return(
            <Container fluid={true}>
                <Row style={{height: '10vh',paddingTop:'3vh'}}>
                    <Col                         
                        xs={{ span: 2, offset: 7 }} 
                        sm={{ span: 2, offset: 7 }} 
                        md={{ span: 2, offset: 7 }}
                        lg={{ span: 2, offset: 7 }}
                       xxl={{ span: 2, offset: 7 }}
                       >
                        
                        <TableSelectorComponent />
                      
                    </Col>
                </Row>

                <Row>
                    
                    <Col  
                        xs={{ span: 8, offset: 1 }} 
                        sm={{ span: 8, offset: 1 }} 
                        md={{ span: 8, offset: 1 }}
                        lg={{ span: 8, offset: 1 }}
                       xxl={{ span: 8, offset: 1 }}

                        style ={{maxHeight:'70vh',overflow: 'auto'}}
                    >

                        <TableComponent />

                    </Col>
                    
                    <Col md={2}>
                    <ToolBar />
                    </Col>
                </Row>

            </Container>
    )
}

export default TableViewPage




