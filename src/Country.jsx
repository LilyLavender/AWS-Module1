import { Medal } from './Medal.jsx';
import './Country.css';

export function Country({ country, onDelete, onMedalChange }) {
  return (
    <div className="country">
      <div className="country-content">
        <div className="country-header">
          <h2>{country.name}</h2>
          <p>{country.gold + country.silver + country.bronze}</p>
          <button onClick={() => onDelete(country.id)}>Delete</button>
        </div>
        <div className="country-body">
          <Medal type="gold" count={country.gold} countryId={country.id} onMedalChange={onMedalChange} />
          <Medal type="silver" count={country.silver} countryId={country.id} onMedalChange={onMedalChange} />
          <Medal type="bronze" count={country.bronze} countryId={country.id} onMedalChange={onMedalChange} />
        </div>
      </div>
    </div>
  );
}