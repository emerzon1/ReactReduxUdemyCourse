import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
const KEY = 'AIzaSyA1ak_-p356PgoDv48UF9me-zJm3NbiWnY';
class App extends Component {
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
          
        });
        console.log(response);
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;
