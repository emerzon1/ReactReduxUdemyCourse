import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions/index";
class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?";
        }
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }
    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={
                    <div>
                        <button
                            onClick={() => {
                                this.props.deleteStream(
                                    this.props.match.params.id
                                );
                                history.push("/");
                            }}
                            className="ui negative button"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => history.push("/")}
                            className="ui button"
                        >
                            Cancel
                        </button>
                    </div>
                }
                onDismiss={() => history.push("/")}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
);
