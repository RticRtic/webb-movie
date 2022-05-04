import "../../styles/searchBackgroundImage.css";
import searchbackground from "../../img/searchbackground.jpeg";

const SearchBackgroundImage = () => {
  return (
    <div>
      <div className="background-img-container">
        <img
          className="search-background-image"
          src={searchbackground}
          alt="img"
        />
      </div>

      <header className="header-container">
        <h2 className="header"> a paradise for movie collectors.</h2>
      </header>
    </div>
  );
};

export default SearchBackgroundImage;
