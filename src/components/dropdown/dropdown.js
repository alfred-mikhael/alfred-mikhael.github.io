import { useState } from "react";
import "./dropdown.css"

export default function Dropdown({title, text}) {
    const [expanded, setExpanded] = useState(false);

    function onClick() {
        setExpanded(!expanded)
    }

    return (
        <>
            <button className="dropdown-button" onClick={onClick}>
                {title}
            </button>
            <div className={`dropdown-content ${expanded ? "expanded" : ""}`}>
                <p> {text} </p>
            </div>
        </>
    );
};