import React from "react";
import DropDown from "./DropDown";
import { useState } from "react";
import Convert from "./Convert";
let items = [
    {
        label: "Latin",
        value: "la",
    },
    {
        label: "Hebrew",
        value: "iw",
    },
    {
        label: "French",
        value: "fr",
    },
    {
        label: "Spanish",
        value: "es",
    },
    {
        label: "Italian",
        value: "it",
    },
    {
        label: "English",
        value: "en",
    },
];
const Translate = () => {
    const [language, setLanguage] = useState(items[0]);
    const [text, setText] = useState("");
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>

            <DropDown
                options={items}
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output: </h3>
            <Convert language={language} text={text} />
        </div>
    );
};

export default Translate;
