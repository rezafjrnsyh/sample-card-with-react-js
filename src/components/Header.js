import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";

const Header = (props) => {
        return (
            <div>
                <Navbar bg="dark" style={{borderRadius: 10, marginTop:10}}>
                    <Navbar.Brand href="#home" style={{color: "white"}}>{props.headerTitle}</Navbar.Brand>
                </Navbar>
            </div>
        );
}

export default Header;
