import React from 'react';

class LoginScreen extends React.Component {
    render() {
        let onLoginClicked = () => {
            this.props.onAuth()
        }
        return (
            <div>
                Login Screen
                <button onClick={()=> {onLoginClicked()}}>Login</button>
            </div>
        );
    }

}

export default LoginScreen;
