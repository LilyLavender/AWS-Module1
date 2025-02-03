import './Medal.css';

export function Medal({ type, count, onIncrease }) {
    return (
      <div className='medal-container'>
        <span>{type.charAt(0).toUpperCase() + type.slice(1)} Medals: {count}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    );
  }