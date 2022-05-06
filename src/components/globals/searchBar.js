import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedApi } from "../../models/apiSearchInput";
import SearchResults from "./searchResults";


const SearchBar = ({isSearching, toggleSearch, device}) => {

    
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

      useEffect(() => {
        getSearchedApi(input, dispatch);
        
      },[input])
    
    
    window.addEventListener('click', () => {
      if(input != "") {
        setInput("");
      }
      
    });




    return (isSearching && device == 'mobile') ? (

      <div className="dropdown_curtain">
        <div className="nav_search_mobile">
            <input
            type={'text'}
            placeholder="Search for a movie..."
            value={input}
            onInput={(e) => setInput(e.target.value)}
            />
          <li>
            <FontAwesomeIcon
              icon={faXmark}
              className="nav_icon"
              onClick={toggleSearch}
            />
          </li>
        </div>

        <SearchResults/>

      </div>
    )
    :
    (
        <div className="nav_search_web">
   
           <input
           className="search_icon"
            placeholder="Search for a movie..."
            value={input}
            onInput={(e) => setInput(e.target.value)}
            />

            <SearchResults/>

        </div>
    )
  };

  export default SearchBar;