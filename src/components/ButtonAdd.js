import React, {Component} from 'react';
import {Button} from "react-bootstrap/cjs";

class ButtonAdd extends Component {
    render() {
        return (
            <div>
                <Button style={{marginTop: 10, display: `flex`, borderRadius: 10}} variant="primary">Add</Button>
            </div>
        );
    }
}

export default ButtonAdd;
