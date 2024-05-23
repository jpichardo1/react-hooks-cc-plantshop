function Search({ onChange }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
