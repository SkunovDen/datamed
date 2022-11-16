import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


import ToolBar from "../components/nav/ToolBar";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import NewHtmlTable from "../components/newHtmlTable/NewHtmlTable";
import mockData2 from "../store/mockData2";

const NewHtmlTableViewPage = () => {

    const tableData = mockData2
    
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Single View', value: '1' },
        { name: 'Split View', value: '2' },
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

    const TableComponent = () => {
        return (
            <NewHtmlTable data={tableData} />
            )
    }

    const singleView = (
        <Row>
            <Container fluid={true} style ={{maxHeight:'70vh',overflow: 'auto'}}>
                <TableComponent />
            </Container>
        </Row>
    )

    const splitView = (
        <>
            <Row>
                <Container fluid={true} style ={{maxHeight:'30vh',overflow: 'auto'}}>
                    <TableComponent />
                </Container>
            </Row>        
            
            <Row style ={{height:'10vh',overflow: 'auto'}}>

            </Row>        
            
            <Row>
                <Container fluid={true} style ={{maxHeight:'30vh',overflow: 'auto'}}>
                    <TableComponent />
                </Container>
            </Row> 
        </>
    )
            

    console.log ('DATA: ', tableData)

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

                    { (radioValue === '1') ? singleView : splitView }

                </Col>
                
                <Col md={2}>
                    <ToolBar />
                </Col>
            </Row>
        </Container>
    )
}

export default NewHtmlTableViewPage




