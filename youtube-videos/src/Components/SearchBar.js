import React, { Component } from 'react';


class SearchBar extends Component {

    state = {term: ''}
    onInputChange = (term) => {
        this.setState({term: term.target.value});
    }
    onFormSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                </form>         
            </div>
        );
    }
}


export default SearchBar;
