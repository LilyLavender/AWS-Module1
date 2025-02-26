import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Country } from './Country.jsx';
import { NewCountry } from './NewCountry.jsx';
import './App.css';

const API_URL = 'https://medals-lss-dqffe8fsgcfsh2bf.centralus-01.azurewebsites.net/api/country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const updateMedals = (id, type, increment) => {
    setCountries(countries.map(country => 
      country.id === id ? { ...country, [type]: country[type] + (increment ? 1 : -1) } : country
    ));
  };

  const deleteCountry = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setCountries(countries.filter(country => country.id !== id)))
      .catch(error => console.error('Error deleting country:', error));
  };

  const addCountry = (name) => {
    axios.post(API_URL, { name, gold: 0, silver: 0, bronze: 0 })
      .then(response => setCountries([...countries, response.data]))
      .catch(error => console.error('Error adding country:', error));
  };

  const totalMedals = countries.reduce((total, country) => {
    return total + country.gold + country.silver + country.bronze;
  }, 0);

  return (
    <div className='content'>
      <h1>Olympic Medals {totalMedals}</h1>
      <div className="country-container">
        {countries.map(country => (
          <Country 
            key={country.id} 
            country={country} 
            onDelete={deleteCountry}
            onMedalChange={updateMedals}
          />
        ))}
      </div>
      <NewCountry onAdd={addCountry} />
    </div>
  );
}

export default App;