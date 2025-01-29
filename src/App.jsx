import { useState } from 'react';
import { Country } from './Country.jsx';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ]);

  const updateMedals = (id) => {
    setCountries(countries.map(country => 
      country.id === id ? { ...country, gold: country.gold + 1 } : country
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
          gold={country.gold} 
          increaseMedals={updateMedals} 
          onDelete={deleteCountry} 
        />
      ))}
    </div>
  );
}

export default App;