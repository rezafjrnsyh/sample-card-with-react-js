import React, {Component} from 'react';
import {Button, Card, Row,Col} from "react-bootstrap/cjs";
import CardDetail from "./CardDetail";

class MyCard extends Component {
    state = {
        cards :[]
    }

    render() {
        let {names, onDeleteCard} = this.props
        console.log(names)
        let cardList = names.map((name, index)=> name !== "" ?
                <CardDetail name={name} onDeleteCard={onDeleteCard} index={index}/>: false)

        return (
            <div>
                <Row>
                    {cardList}
                </Row>
            </div>
        );
    }
}

export default MyCard;
