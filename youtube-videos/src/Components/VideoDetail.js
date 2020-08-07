import React from "react";

const VideoDetail = ({ video }) => {
    if (video) {
        return (
            <div>
                <div className="ui embed">
                    <iframe title="Video player" src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                <div className="ui segment">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
    return <div>Loading...</div>;
};

export default VideoDetail;
