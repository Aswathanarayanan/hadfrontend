import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Menu=()=>{
    return(
        <div>
           <div className="mb-2">
                <Button variant="primary" size="lg">
                    Patient Registration
                </Button>{' '}
                <Button variant="primary" size="lg">
                    HIP
                </Button>{' '}
                <Button variant="primary" size="lg">
                    HIU
                </Button>
            </div>
        </div>
    )
}
export default Menu
