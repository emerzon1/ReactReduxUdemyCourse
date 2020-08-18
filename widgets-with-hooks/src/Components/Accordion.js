import React, {useState} from 'react';

const Accordion = ({ items }) => {
    const [index, setInd] = useState(null)
    const onTitleClick = index => {
        setInd(index);
    }
    
    const renderedItems = items.map((i, ind) => {
        const active = (ind === index) ? "active" : ""
        return (
        <React.Fragment key={i.title}>
            <div className={`title ${active}`}title onClick = {() => {onTitleClick(ind)}}>
                <i className="dropdown icon"></i>
                {i.title}
            </div>
            <div className={`content ${active}`}>
                <p>{i.content}</p>
            </div>
        </React.Fragment>);
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;
