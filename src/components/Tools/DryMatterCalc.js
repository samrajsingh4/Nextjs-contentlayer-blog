"use client"
import React, { useState } from 'react';

const DryMatterCalc = () => {
  const [inputs, setInputs] = useState({
    protein: 0,
    fat: 0,
    fiber: 0,
    ash: 0,
    moisture: 0,
  });

  const [results, setResults] = useState({
    proteinDM: 0,
    fatDM: 0,
    carbDM: 0,
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) });
  };

  const calculateDryMatter = () => {
    const dryMatter = 100 - inputs.moisture;
    const proteinDM = (inputs.protein / dryMatter) * 100;
    const fatDM = (inputs.fat / dryMatter) * 100;
    const carbDM = 100 - (proteinDM + fatDM + (inputs.fiber / dryMatter) * 100 + (inputs.ash / dryMatter) * 100);

    setResults({ proteinDM, fatDM, carbDM });
  };

  return (
    <div className="max-w-xl mx-auto p-5 bg-light shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-dark mb-4">Dry-Matter Basis Calculator</h2>
      <div className="space-y-4">
        {['protein', 'fat', 'fiber', 'ash', 'moisture'].map((item) => (
          <div key={item}>
            <label htmlFor={item} className="block text-gray font-medium">{`Crude ${item} (%)`}</label>
            <input
              type="number"
              name={item}
              id={item}
              value={inputs[item]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
              placeholder={`Enter ${item}...`}
            />
          </div>
        ))}
        <button
          onClick={calculateDryMatter}
          className="mt-4 w-full bg-accent hover:bg-col2 text-white py-2 rounded-md transition-colors duration-200"
        >
          Calculate
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-dark mb-2">Results</h3>
        <p className="text-sm text-gray">Proteins in d.m.: {results.proteinDM.toFixed(2)}% (Optimal: 25-45%)</p>
        <p className="text-sm text-gray">Fats in d.m.: {results.fatDM.toFixed(2)}% (Optimal: 10-30%)</p>
        <p className="text-sm text-gray">Carbohydrates in d.m.: {results.carbDM.toFixed(2)}% (Optimal: 2-5%)</p>
      </div>
    </div>
  );
};

export default DryMatterCalc;
