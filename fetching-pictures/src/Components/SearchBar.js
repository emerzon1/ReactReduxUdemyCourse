import React from "react";

class SearchBar extends React.Component {
    /*constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }*/ // ONE FIX FOR this error, also can change function into arrow function
    state = {term: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onClick={this.onInputClick} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
