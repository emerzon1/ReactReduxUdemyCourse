import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import DropDown from "./Components/DropDown";
import Translate from "./Components/Translate";
const items = [
    {
        title: "What is React?",
        content: "React is a frontend JS framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];
const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "A Shade of Blue",
        value: "blue",
    },
    {
        label: "The Color Orange",
        value: "orange",
    },
    {
        label: "The Color Purple",
        value: "purple",
    },
    {
        label: "A Shade of Pink",
        value: "pink",
    },
];
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            {/*<Accordion items={items}/>*/}
            {/*<Search />*/}
            {/*{showDropdown ? (
                <DropDown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                    label="Select a Color"
                />
            ) : null}*/}
            <Translate />

        </div>
    );
};

export default App;
