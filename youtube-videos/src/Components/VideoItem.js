import React from 'react';
import "./VideoItem.css"
const VideoItem = (props) => {
    return (
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt="Thumbnail" />
            <div className="content"><div className="header">{props.video.snippet.title}</div></div>
        </div>
    );
}

export default VideoItem;
