import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap"

import { useDispatch } from "react-redux";
import { loadDataFromFile } from '../store/tableDataSlice'

const UploadPage = () => {

    const [selectedFile, setSelectedFile] = useState(null)

    const dispatch = useDispatch();



    const filePickerHandler = (e) => {
        setSelectedFile( (prevState) => e.target.files[0] )
    }

    const uploadFile = () => {
        if (selectedFile) dispatch(loadDataFromFile(selectedFile))
    }

    return(

            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <br />
                        <h3>Data input page</h3>
                        <br />
                        <br />
                        <br />
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
{/* TEMPORARY HIDED while UNUSED */}
                        {/* <Form.Label htmlFor="basic-url">URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                https://
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" size="sm"
                                value = { url }
                                onChange={(e) => {inputUrlHandler(e)}} />

                            <Button variant="outline-secondary" id="button-addon2" onClick={() => getFromUrl() }>
                                Get data
                            </Button>

                        </InputGroup> */}
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Form.Group controlId="formFileSm" className="mb-3" >
                            <Form.Label >Select file</Form.Label>
                            <Form.Control type="file"
                                size="sm"
                                accept=".csv"
                                onChange={e => filePickerHandler(e)} />
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
{/* TEMPORARY HIDED while UNUSED */}
                    {/* <Col md={6} style={{
                        color: "8a8a8a",
//                        marginTop: "3vh",
                        backgroundColor : "#F8F8F8",
                        minHeight: "33vh",
                        border : "1px solid #a8a8a8",
                        borderRadius: "17px",
                        alignItems: "center"
                    }}>
                        Or drop file here:
                    </Col> */}
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={5}></Col>
                    <Col md={2}>
                        <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            size="sm"
                            style={{marginTop: '10px'}}
                            onClick={() => uploadFile() }>
                            Upload file
                        </Button>
                    </Col>
                    <Col md={5}></Col>

                </Row>
            </Container>
    )
}

export default UploadPage