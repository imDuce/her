import React from "react";
import "./staticCake.css"; 


const Cake = () => {
  return (
    <div className="cake">
      <div className="velas">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="fuego"></div>
        ))}
      </div>
      <div className="cobertura"></div>
      <div className="bizcocho"></div>
    </div>
  );
};

export default Cake;
