import './Country.css';

export function Country({ id, name, gold, increaseMedals, onDelete }) {
  return (
    <div className="country">
      <div className="country-content">
        <h2>{name}</h2>
        <span>Gold Medals: {gold}</span>
        <button onClick={() => increaseMedals(id)}>+</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}