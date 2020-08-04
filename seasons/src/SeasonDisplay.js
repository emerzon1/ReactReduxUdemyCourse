import "./SeasonDisplay.css";
import React from "react";
const seasonConfig = {
    summer: { text: "Let's hit the beach", icon: "massive sun icon" },
    winter: { text: "Brrr, it is chilly", icon: "massive snowflake icon" },
};
const getSeason = (lat, mon) => {
    if (mon > 2 && mon < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};
const SeasonDisplay = (props) => {
    let date = new Date().getMonth();
    let content = getSeason(props.lat, date);
    return (
        <div className={`season-display ${content}`}>
            <i className={"icon-left " + seasonConfig[content].icon} />
            <h1>{seasonConfig[content].text}</h1>
            <i className={"icon-right " + seasonConfig[content].icon} />
        </div>
    );
};

export default SeasonDisplay;
