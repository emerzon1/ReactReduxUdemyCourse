import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        return <div></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        fetchPosts: state.fetchPosts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
