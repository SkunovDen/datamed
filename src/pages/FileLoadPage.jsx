import React from "react";
import './FileLoadPage.css'

import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const FileLoadPage = () => {
    // TODO get list from server
    const filenames = [
        'filename 1',
        'filename 2',
        'filename 3',
        'filename 4',
        'filename 5',
        'filename 6'
    ]

    const [selectedFile, setSelectedFile] = useState('Not selected')

    const selectChangeHandler = (e) => {
        const selected = e.target.value
        setSelectedFile( prev => selected )
    }

    const FileSelect = (props) => {
        const filelist = props.filelist
               
        return(
            <div>
                <label for="file-select">Select file to load:</label>

                <div class="select">

                    <select id="file-select" size="12" 
                            onChange={(e)=> props.changeHandler(e)} 
                            >
                        {filelist.map((element, index) => {
                            return  <option key={index} 
                                            value={element} 
                                            selected={(element === selectedFile)} 
                                    >
                                        {element}
                                    </option>    
                            })
                        }
                    </select>
                
                </div>
            </div>
        )
    }

    return(
        <Container>
            <h3>File Load page</h3>
            <Row style={{marginTop: '3vh'}}>
                <Col xs md lg="1"></Col>
                <Col xs md lg="6">
                    <FileSelect filelist={filenames} changeHandler={selectChangeHandler}/>    
                </Col>
                <Col xs md lg="4">
                    <div className="d-grid gap-2">
                        <strong>Will be load : {selectedFile}</strong>
                        <Button size="lg" variant="outline-success">
                            Load File
                        </Button>
                    </div>
                </Col>

            </Row>    
            

        </Container>
    )
}

export default FileLoadPage