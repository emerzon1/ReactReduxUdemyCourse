import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
class App extends React.Component {
    state = { lat: null, errorMessage: "" };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ lat: pos.coords.latitude });
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }
    componentDidUpdate() {
        console.log("UPDATED");
    }
    renderContent() {
        if (this.state.errorMessage) {
            return (
                <div>
                    <h1>Error: {this.state.errorMessage}</h1>
                </div>
            );
        }
        if (this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            );
        } else {
            return (
                <div>
                    <Loader message="Please accept location request"/>
                </div>
            );
        }
    }
    render() {
        return (<div>{this.renderContent()}</div>);
    }
}

export default App;
