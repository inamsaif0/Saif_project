import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate fetching search results (replace with actual API calls)
    const results = simulateSearchResults(searchTerm);
    setSearchResults(results);
  };

  const simulateSearchResults = (term) => {
    // Simulate search results, e.g., an array of strings
    return [
      'Result 1: ' + term,
      'Result 2: ' + term,
      'Result 3: ' + term
    ];
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
