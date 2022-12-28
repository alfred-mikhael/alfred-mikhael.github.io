import "./Card.css";


const Card = ({ header, topRight, children }) => {
    return (
        <div className="card">
            <div className="card-header">
                {header} <span className="right-align"> {topRight} </span>
            </div>
            {children}
        </div>
    );
}

export default Card;