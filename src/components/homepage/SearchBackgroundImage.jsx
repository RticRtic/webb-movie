
import "../../styles/searchBackgroundImage.css"
import searchbackground from "../../img/searchbackground.jpeg"

const SearchBackgroundImage = () => {
    return(
        <div>
             <img className="search-background-image" src={searchbackground} alt="img" />
        </div>
    );
}

export default SearchBackgroundImage;