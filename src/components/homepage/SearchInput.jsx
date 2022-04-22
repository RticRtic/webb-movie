import "../../styles/searchInput.css";

const SearchInput = () => {
  return (
    <div>
        <header className="header-container">
            <h2 className="header"> a paradise for movie collectors.</h2>
        </header>
      <div className="searchbar-input-container">
        <input
          placeholder="Search movie..."
          className="search-input-field"
        ></input>
      </div>
    </div>
  );
};

export default SearchInput;
