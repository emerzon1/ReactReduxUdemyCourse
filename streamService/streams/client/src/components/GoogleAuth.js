import React, { Component } from "react";

class GoogleAuth extends Component {
    state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "616258355192-ge9fl3qnjs18hc0pu91807d2dtbk7t6k.apps.googleusercontent.com",
                    scope: "email",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        }
        if (this.state.isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={() => {
                        this.onSignOutClick();
                    }}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        return (
            <button
                className="ui red google button"
                onClick={() => {
                    this.onSignInClick();
                }}
            >
                <i className="google icon" />
                Sign In With Google
            </button>
        );
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
