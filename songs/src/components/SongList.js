import React from "react";
import { selectSong } from "../actions";
import { connect } from "react-redux";

const SongList = (props) => {
    return (
        <div>
            {props.songs.map((song, i) => {
                return (
                    <div className="ui divided list" key={i}>
                        <div className="item">
                            <div className="right floated content">
                                <button onClick={()=>{props.selectSong(song)}}className="ui button primary">
                                    Select
                                </button>
                            </div>
                            <div className="content">{song.title}</div>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    };
};

export default connect(mapStateToProps, { selectSong })(SongList);
