import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ToolBar from "../components/nav/ToolBar";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import SimpleTable from "../components/simpleTable/SimpleTable";




import { useSelector, useDispatch } from "react-redux";

import { transformSourceDataSelector, transformResultDataSelector,
         sourceDataSelectedColumnsSelector, resultDataSelectedColumnsSelector,
        //  addSourceSelectedColumn, removeSourceSelectedColumn,
        //  addResultSelectedColumn, removeResultSelectedColumn,
         toggleSourceSelectedColumn, toggleResultSelectedColumn  } from '../store/transformDataSlice'





const NewHtmlTableViewPage = () => {

    const sourceTableData = useSelector(transformSourceDataSelector)
    const resultTableData = useSelector(transformResultDataSelector)

    const sourceSelectedColumns = useSelector(sourceDataSelectedColumnsSelector)
    const resultSelectedColumns = useSelector(resultDataSelectedColumnsSelector)

    const dispatch = useDispatch()   

    const toggleSourceColumn = (colNum) => {
        console.log('Toggle source:  ', colNum)
        dispatch( toggleSourceSelectedColumn ( colNum ) )
    }

    const toggleResultColumn = (colNum) =>{
        console.log('Toggle result: ', colNum)
        dispatch( toggleResultSelectedColumn( colNum ) )
    }



    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Single View', value: '1' },
        { name: 'Split View',  value: '2' },
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
    




    const singleView = (
        <Row>

            <Container fluid={true} style ={{maxHeight:'70vh',overflow: 'auto'}}>
                <strong>Source table:</strong>
                <br/>
                <SimpleTable 
                    data={sourceTableData} 
                    selectedColumns={sourceSelectedColumns} 
                    toggleColumn ={toggleSourceColumn}
                />
            </Container>
        </Row>
    )

    const splitView = (
        <>
            <Row>
                <Container fluid={true} style ={{maxHeight:'30vh',overflow: 'auto'}}>
                    <strong>Source table:</strong>
                    <br/>
                    <SimpleTable 
                        data={sourceTableData} 
                        selectedColumns={sourceSelectedColumns}
                        toggleColumn ={toggleSourceColumn}
                    />
                </Container>
            </Row>        
            
            <Row style ={{height:'10vh',overflow: 'auto'}}>

            </Row>        
            
            <Row>
                <Container fluid={true} style ={{maxHeight:'30vh',overflow: 'auto'}}>
                    <strong>Result table:</strong>
                    <br/>
                    <SimpleTable 
                        data={resultTableData} 
                        selectedColumns={resultSelectedColumns}
                        toggleColumn ={toggleResultColumn}
                    />
                </Container>
            </Row> 
        </>
    )
            
    return(
        <Container fluid={true}>
            <Row style={{height: '10vh',paddingTop:'3vh'}}>
                 <Col md={5}>
                     * NewHtmlTableViewPage -> SimpleTable /s *
                 </Col>
                 <Col md={6}>
                    <TableSelectorComponent />
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 8, offset: 1 }} >

                    { (radioValue === '1') ? singleView : splitView }

                </Col>
                
                <Col md={3}>
                    <ToolBar />
                </Col>
            </Row>
        </Container>
    )
}

export default NewHtmlTableViewPage




