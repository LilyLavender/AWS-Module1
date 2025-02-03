import { useState, useRef } from 'react';
import { Country } from './Country.jsx';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 0 },
    { id: 2, name: 'China', gold: 3, silver: 0, bronze: 2 },
    { id: 3, name: 'France', gold: 0, silver: 2, bronze: 3 },
  ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  const updateMedals = (id, medalType) => {
    setCountries(countries.map(country => 
      country.id === id ? { ...country, [medalType]: country[medalType] + 1 } : country
    ));
  };

  const deleteCountry = (id) => {
    setCountries(countries.filter(country => country.id !== id));
  };

  return (
    <div className="country-container">
      {countries.map(country => (
        <Country 
          key={country.id} 
          id={country.id}
          name={country.name} 
          medals={medals.current}
          medalCounts={{ gold: country.gold, silver: country.silver, bronze: country.bronze }}
          increaseMedals={updateMedals} 
          onDelete={deleteCountry} 
        />
      ))}
    </div>
  );
}

export default App;