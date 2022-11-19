import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


import { useDispatch } from "react-redux";
import { cloneSourceTable, clearResultTable  } from '../../store/transformDataSlice'



function ToolBar() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cloneSource = () => {
    dispatch(cloneSourceTable())
  }

  const clearResult = () => {
    dispatch(clearResultTable())
  }

// DEBUG 
  const test1 = () =>{
    console.log('Test action 1  button click')
    
  }

// DEBUG 
  const test2 = () =>{
    console.log('Test action 2  button click')
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Show toolbar
      </Button>
      <Offcanvas key={1} placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Toolbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. 
          In real life we can have the elements you
          have chosen. :
          <br />
            <Button variant="primary" size="sm" onClick={() => cloneSource()}>
              Clone source
            </Button>{' '}
            <Button variant="primary" size="sm" onClick={() => clearResult()}>
              Clear result
            </Button>{' '}

          <br /><br />
          <hr></hr>
            SOURCE TABLE ACTIONS
            <br /><br />
          <div>
              <Button variant="primary" size="sm" onClick={() => test1()} disabled>
                  Test action 1
              </Button>{' '}

          </div>
        

          <hr></hr>
          <hr></hr>
            RESULT TABLE ACTIONS
            <br /><br />
          <div>
            <Button variant="primary" size="sm" onClick={() => test2()} disabled>
                Test action 2
            </Button>{' '}

        </div>
          <hr></hr>

        <div className="d-grid gap-2">
          <Button variant="primary" size="sm" disabled>
            Proceed
          </Button>

        </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ToolBar

