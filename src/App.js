import React from 'react';
import './App.css'
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import MyCard from "./components/MyCard";
import {Container} from "react-bootstrap/cjs";
import FormSample from "./components/Form";

class App extends React.Component{
    state = {
        isLoggedIn: false,
        listData: [
            {title: "Title Satu", subtitle: 'subtitle satu', text: 'text satu'},
            {title: "Title dua", subtitle: 'subtitle dua', text: 'text dua'}
        ],
        names: [],
        componentName : null
    }

    onSubmitAdd = (name) => {
        this.state.names.push(name)
        this.setState({...this.state, names: this.state.names, componentName: <MyCard onDeleteCard={this.onDelete} names={this.state.names}/>, name: ""})
    }

    onAuthenticate = () => {
        this.setState({isLoggedIn: true})
    }

    onDelete = (index) => {
        this.setState({...this.state, names: this.state.names.splice(1, index)})
    }

    onLogoutAuthenticate = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        let currentScreen;
        if (this.state.isLoggedIn) {
            currentScreen = <HomeScreen onAuth={this.onLogoutAuthenticate}/>
        } else {
            currentScreen = <LoginScreen onAuth={this.onAuthenticate}/>
        }
        return (
            <div className="App">
                {/*{currentScreen}*/}
                <Container fluid>
                    {this.props.children}
                    <FormSample onSubmitAdd={this.onSubmitAdd} handleChanges={this.handleChanges}/>
                    {this.state.componentName}
                    {/*<Row>*/}
                    {/*    <Col><ButtonAdd/></Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <MyCard/>*/}
                    {/*</Row>*/}
                </Container>
            </div>
        );
    }
}

export default App;
