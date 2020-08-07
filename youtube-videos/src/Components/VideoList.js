import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.videos.map((vid) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} key={vid.id.videoId} video={vid}/>
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;
