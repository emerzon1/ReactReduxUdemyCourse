import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "616258355192-ge9fl3qnjs18hc0pu91807d2dtbk7t6k.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        });
    }
    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return <div>
                IDK if signed in
            </div>
        }
        if(this.state.isSignedIn){
            return <div>
                Am signed in
            </div>
        }
        return <div>Not signed in</div>
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;
