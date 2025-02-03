import { Medal } from './Medal.jsx';
import './Country.css';

export function Country({ id, name, medals, medalCounts, increaseMedals, onDelete }) {
  return (
    <div className="country">
      <div className="country-content">
        <div className="country-header">
          <h2>{name}</h2>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
        <div className="country-body">
          {medals.map(medal => (
            <Medal 
              key={medal.id} 
              type={medal.name} 
              count={medalCounts[medal.name]} 
              onIncrease={() => increaseMedals(id, medal.name)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}