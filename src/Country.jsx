import { useState } from 'react'
import './Country.css'

export function Country() {
  const [name] = useState("United States");
  const [gold, setGold] = useState(0);
    
  const handleClick = () => {
    setGold(gold + 1);
  };
    
  return (
    <div className="country">
      <div className="country-content">
        <h2>{name}</h2>
        <span>Gold Medals: {gold}</span>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}