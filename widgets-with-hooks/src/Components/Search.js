import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [res, setRes] = useState([]);
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            if (term) {
                (async () => {
                    const { data } = await axios.get(
                        "https://en.wikipedia.org/w/api.php",
                        {
                            params: {
                                action: "query",
                                list: "search",
                                format: "json",
                                origin: "*",
                                srsearch: term,
                            },
                        }
                    );
                    setRes(data.query.search);
                })();
            }
        }, 300);
        return () => {clearTimeout(timeoutID)}
    }, [term]);
    const renderRes = res.map((i) => {
        return (
            <div className="item" key={i.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${i.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{i.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: i.snippet }}
                    ></span>
                </div>
            </div>
        );
    });
    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input
                    value={term}
                    className="input"
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
            <div className="ui celled list">{renderRes}</div>
        </div>
    );
};

export default Search;
