import './Medal.css';

export function Medal({ type, count, countryId, onMedalChange }) {
  return (
    <div className='medal-container'>
      <div className='medal-subcontainer-1'>
        <span>{type.charAt(0).toUpperCase() + type.slice(1)} medals: </span>
      </div>
      <div className='medal-subcontainer-2'>
        <button onClick={() => onMedalChange(countryId, type, true)}>+</button>
        <span>{count}</span>
        <button onClick={() => onMedalChange(countryId, type, false)} disabled={count === 0}>-</button>
      </div>
    </div>
  );
}