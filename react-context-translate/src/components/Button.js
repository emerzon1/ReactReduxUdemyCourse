import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
    //static contextType = LanguageContext; - for this.context

    render() {
        return (
            <ColorContext.Consumer>
                {(val) => (
                    <button className={`ui button ${val}`}>
                        <LanguageContext.Consumer>
                            {(value) =>
                                value.language === "english" ? "Submit" : "Voorleggen"
                            }
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
