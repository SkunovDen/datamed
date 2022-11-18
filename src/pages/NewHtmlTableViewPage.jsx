import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


// import ToolBar from "../components/nav/ToolBar";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import SimpleTable from "../components/simpleTable/SimpleTable";

import mockData2 from "../store/mockData2";


import ToolBar from "../components/toolbar/ToolBar";

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
                 <Col                         
                    xs={{ span: 4, offset: 5 }} 
                    sm={{ span: 4, offset: 5 }} 
                    md={{ span: 4, offset: 5 }}
                    lg={{ span: 4, offset: 5 }}
                    xxl={{ span: 4, offset: 5 }}
                >
                    *SimpleTable{' '}
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
                
                <Col             
                    xs={{ span: 3 }}
                    sm={{ span: 3 }} 
                    md={{ span: 3 }}
                    lg={{ span: 3 }}
                    xxl={{ span: 3 }}
                >
                    <ToolBar />
                    
                </Col>
            </Row>
        </Container>
    )
}

export default NewHtmlTableViewPage




