import React from "react";
import './ToolBar.css'

import { Container } from "react-bootstrap";

const ToolBar = () => {
    
    const selected = [2,3,8]
    
    return (
        <Container className='toolbar' fluid={'true'} >
            <label className='toolbar-label'>
                &nbsp;&nbsp;&nbsp;
                TOOLS
                &nbsp;&nbsp;&nbsp;
            </label>

            <p>Selected columns:</p>
            
            {selected}


        </Container>
    )
}


export default ToolBar