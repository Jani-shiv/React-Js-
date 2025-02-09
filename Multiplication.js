import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MultiplicationTable = () => {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateTable();
    }
  };

  const generateTable = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const generatedTable = [];
      for (let i = 1; i <= 10; i++) {
        generatedTable.push(`${num} x ${i} = ${num * i}`);
      }
      setTable(generatedTable);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Multiplication Table Generator</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <input 
            type="number" 
            value={number} 
            onChange={handleInputChange} 
            onKeyPress={handleKeyPress} 
            placeholder="Enter a number"
            className="form-control"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <button onClick={generateTable} className="btn btn-primary w-100">Generate Table</button>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          {table.length > 0 && (
            <ul className="list-group">
              {table.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable;