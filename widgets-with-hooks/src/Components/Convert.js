import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
    const [res, setRes] = useState("");
    const [debouncedText, setDText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDText(text);
        }, 500);
        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                    },
                }
            );
            setRes(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{res}</h1>
        </div>
    );
};

export default Convert;
