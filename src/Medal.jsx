import './Medal.css';

export function Medal({ type, count, onIncrease, onDecrease }) {
  return (
    <div className='medal-container'>
      <div className='medal-subcontainer-1'>
        <span>{type.charAt(0).toUpperCase() + type.slice(1)} medals: </span>
      </div>
      <div className='medal-subcontainer-2'>
        <button onClick={onIncrease}>+</button>
        <span>{count}</span>
        <button onClick={onDecrease} disabled={count === 0}>-</button>
      </div>
    </div>
  );
}