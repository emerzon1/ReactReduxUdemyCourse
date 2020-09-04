import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
    //static contextType = LanguageContext; - for this.context
    render() {
        //const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => value.language === 'english' ? 'Name' : 'Naam'}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;
