import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ options, label, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const OBC = (e) => {
            if (ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click", OBC);
        return () => {
            document.body.removeEventListener("click", OBC);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });
    return (
        <div>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`ui selection dropdown ${
                            open ? "visible active" : ""
                        }`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div
                            className={`menu ${
                                open ? "visible transition" : ""
                            }`}
                        >
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{color:selected.value}}><hr /> This text is {selected.value}!</div>
        </div>
    );
};

export default DropDown;
