import "./Card.css";
import { useEffect, useState } from "react";

const Card = ({ header, topRight, children }) => {
    const [dimensions, setDimensions] = useState({
        width: undefined, 
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    if (dimensions["width"] > 620) {
        return (
            <div className="card">
                <div className="card-header">
                    {header} <span className="right-align"> {topRight} </span>
                </div>
                {children}
            </div>
        ); 
    }
    return (
        <div className="card">
            <div className="card-header">
                {header} 
                {topRight}
            </div>
            {children}
        </div> 
    );

}

export default Card;