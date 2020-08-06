import React, { Component } from "react";

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    };
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }
    render() {
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
