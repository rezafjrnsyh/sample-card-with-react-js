import React, {Component} from 'react';
import {Form, Row, Col, Button} from "react-bootstrap/cjs";

class FormSample extends Component {
    state = {
        name : ''
    }

    handleChanges = (ev) => {
        this.setState({...this.state, name : ev.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitAdd(this.state.name)
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <form>
                    <label>
                        Name :
                    </label>
                    <input value={this.state.name} placeholder="Name" onChange={this.handleChanges}/>
                    {/*<input type="submit" value="Submit" />*/}
                </form>
                    <Button style={{display: 'flex', borderRadius: 10}} variant="success" onClick={this.onSubmit}>Add</Button>
            </div>
        );
    }
}

export default FormSample;
