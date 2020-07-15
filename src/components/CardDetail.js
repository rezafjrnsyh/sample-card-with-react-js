import React, {Component} from 'react';
import {Button, Card, Row} from "react-bootstrap/cjs";

class CardDetail extends Component {
    render() {
        let {name, onDeleteCard, index} = this.props
        const styles = {
            well : {
                boxShadow: `5px 10px #9E9E9E`,
                width: '18rem', borderRadius: 10
            }
        }
        return (
            <div style={{marginTop: 10, marginLeft: 12}}>
                <Card style={styles.well}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
                <Row style={{display: `flex`, justifyContent: `space-around`}}>
                    {/*<Button style={{marginTop: 15, display: `flex`, borderRadius: 10}} variant="warning">Change</Button>*/}
                    {/*<Button style={{marginTop: 15, display: `flex`, borderRadius: 10}} variant="warning" onClick={()=>{onDeleteCard(index)}}>Delete</Button>*/}
                </Row>
            </div>
        );
    }
}

export default CardDetail;
