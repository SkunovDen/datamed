import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ToolBar from "../components/nav/ToolBar";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import SimpleTable from "../components/simpleTable/SimpleTable";

import mockData2 from "../store/mockData2";

const NewHtmlTableViewPage = () => {

    const tableData = mockData2
    
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
                <SimpleTable data={tableData} />
            </Container>
        </Row>
    )

    const splitView = (
        <>
            <Row>
                <Container fluid={true} style ={{maxHeight:'30vh',overflow: 'auto'}}>
                    <SimpleTable data={tableData} />
                </Container>
            </Row>        
            
            <Row style ={{height:'10vh',overflow: 'auto'}}>

            </Row>        
            
            <Row>
                <Container fluid={true} style ={{maxHeight:'30vh',overflow: 'auto'}}>
                    <SimpleTable data={tableData} />
                </Container>
            </Row> 
        </>
    )
            



    return(
        <Container fluid={true}>
            <Row style={{height: '10vh',paddingTop:'3vh'}}>
                 <Col md={5}>
                     * NewHtmlTableViewPage * SimpleTable *
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




