import React, {Component} from 'react';

class HomeScreen extends Component {
    render() {
        let onLogoutClicked = () => {
            this.props.onAuth()
        }
        return (
            <div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <span>Home Screen</span>
                    <button onClick={()=>{onLogoutClicked()}}>Logout</button>
                </div>
            </div>
        );
    }
}

export default HomeScreen;
