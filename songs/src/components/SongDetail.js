import React from 'react';
import { connect } from "react-redux";

const SongDetail = (props) => {
    if(!props.selected){
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {props.selected.title}</p>
            <p>Duration: {props.selected.duration}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selected: state.selectedSongKey,
    };
};

export default connect(mapStateToProps)(SongDetail);
