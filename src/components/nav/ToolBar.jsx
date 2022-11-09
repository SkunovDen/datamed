import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ToolBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <br /><br /><br />
        <div>
            <Button variant="primary" size="sm">
                Select action 1
            </Button>{' '}
            <Button variant="secondary" size="sm">
                Select action 2
            </Button>{' '}
            <Button variant="primary" size="sm">
                Select action 3
            </Button>
        </div>
        <br />
        <div>
            <Button variant="secondary" size="sm">
                Select action 4
            </Button>{' '}
            <Button variant="primary" size="sm">
                Select action 5
            </Button>{' '}
            <Button variant="secondary" size="sm">
                Select action 6
            </Button>
        </div>
        <br /><br /><br />
        <div className="d-grid gap-2">
      <Button variant="primary" size="sm">
        Proceed
      </Button>
      <Button variant="secondary" size="sm">
        Cancel
      </Button>
    </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ToolBar

