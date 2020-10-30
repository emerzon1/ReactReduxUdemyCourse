import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = "AIzaSyAo7Auw1At7pfe80VpVkbmG3SinjOQ5fMs";
class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        currentPage: 1,
        term: "",
        currentVideos: [],
    };
    componentDidMount() {
        this.onTermSubmit("");
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 100,
                type: "video",
                key: KEY,
            },
        });
        console.log(response, this.state.currentPage);
        this.setState(
            {
                currentPage: 1,
                videos: response.data.items, //.slice((this.state.currentPage-1)*5, this.state.currentPage*5),
                selectedVideo: response.data.items[0],
            },
            () => {
                this.setState({ currentVideos: this.state.videos.slice(0, 5) });
            }
        );
    };
    onTermChange = (term) => {
        this.setState({ term: term.target.value });
    };
    onNextPage = () => {
        this.setState(
            {
                currentPage: this.state.currentPage + 1,
                currentVideos: this.state.videos.slice(
                    this.state.curentPage * 5,
                    (this.state.currentPage + 1) * 5
                ),
            },
            () => {
                this.setState({
                    currentVideos: this.state.currentVideos.slice(
                        this.state.currentVideos.length - 5
                    ),
                });
            }
        );
    };
    onPreviousPage = () => {
        this.setState(
            {
                currentPage: Math.max(1, this.state.currentPage - 1),
                currentVideos: this.state.videos.slice(
                    Math.max(0, this.state.curentPage - 2) * 5,
                    Math.max(1, this.state.currentPage - 1) * 5
                ),
            },
            () => {
                this.setState({
                    currentVideos: this.state.currentVideos.slice(
                        this.state.currentVideos.length - 5
                    ),
                });
            }
        );
    };
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onChange={this.onTermChange}
                    onTermSubmit={this.onTermSubmit}
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.currentVideos}
                            />
                            <button
                                className="ui left labeled icon button"
                                onClick={() => {
                                    this.onPreviousPage();
                                }}
                            >
                                <i className="left arrow icon"></i>
                                Previous
                            </button>
                            <button
                                className="ui right labeled icon button"
                                onClick={() => {
                                    this.onNextPage();
                                }}
                            >
                                <i className="right arrow icon"></i>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
