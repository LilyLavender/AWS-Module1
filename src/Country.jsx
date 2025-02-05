import { Medal } from './Medal.jsx';
import './Country.css';

export function Country({ id, name, medals, medalCounts, totalMedals, increaseMedals, decreaseMedals, onDelete }) {
  return (
    <div className="country">
      <div className="country-content">
        <div className="country-header">
          <h2>{name}</h2>
          <p>{totalMedals}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
        <div className="country-body">
          {medals.map(medal => (
            <Medal 
              key={medal.id} 
              type={medal.name} 
              count={medalCounts[medal.name]} 
              onIncrease={() => increaseMedals(id, medal.name)} 
              onDecrease={() => decreaseMedals(id, medal.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}