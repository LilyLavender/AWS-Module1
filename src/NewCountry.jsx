import { useState, useEffect } from 'react';
import './NewCountry.css';

export function NewCountry({ onAdd }) {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(name);
      setName('');
      setShowDialog(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowDialog(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="new-country">
      <button id="add-country-button" onClick={() => setShowDialog(true)}>+ Add Country</button>
      {showDialog && (
        <div className="modal-overlay" onClick={() => setShowDialog(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add Country</h2>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter country name" 
            />
            <div className="modal-buttons">
              <button className="cancel" onClick={() => setShowDialog(false)}>Cancel</button>
              <button className="confirm" onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}