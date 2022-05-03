import React, { Fragment, useEffect, useState } from "react";
import "../../styles/navbar.css";
import "../../styles/fa-icons.css";
import Home from "../homepage/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faMagnifyingGlass,
  faXmark,
  faFilm,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../features/shoppingcartReducer";

const NavigationBar = ({ device }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  

  


  const DropdownMenu = () => {
    return dropdownActive ? (
      <div className="dropdown_curtain">
        <div className="dropdown_menu">
          <header>
            <li>
              <FontAwesomeIcon
                icon={faXmark}
                className="nav_icon"
                onClick={toggleDropdown}
              />
            </li>
          </header>
          <li className="dropdown_item">
            <FontAwesomeIcon icon={faHouse} className="nav_icon" />
            Home
          </li>
          <li className="dropdown_item">
            <FontAwesomeIcon icon={faFilm} className="nav_icon" />
            Catalog
          </li>
        </div>
      </div>
    ) : null;
  };

  const SearchBar = () => {
    return isSearching ? (
      <div className="dropdown_curtain">
        <div className="nav_search">
          <input placeholder="Search for a movie..."></input>
          <li>
            <FontAwesomeIcon
              icon={faXmark}
              className="nav_icon"
              onClick={toggleSearch}
            />
          </li>
        </div>
      </div>
    ) : null;
  };

  return device == "web" ? (
    //Navigation Bar - Web
    <div className={"navbar" + " " + "web"}>
      <nav>
        <li>
          <h2 className="app_logo">
            Movie<span style={{ color: "white" }}>Collector</span>
          </h2>
        </li>

        <div>
          <section className="web_navholder">
            <li>Home</li>

            <li>Catalog</li>
            
            
            
           
          </section>

          <section className="web_iconholder">
            <li>
              <FontAwesomeIcon icon={faCartShopping} className="nav_icon" />
            </li>

            <li>
              <FontAwesomeIcon icon={faUser} className="nav_icon" />
            </li>
          </section>
        </div>
      </nav>
    </div>
  ) : (
    //Navigation Bar - Mobile
    <Fragment>
      <div className={"navbar" + " " + "mobile"}>
        <nav>
          <li>
            <FontAwesomeIcon
              icon={faBars}
              className="nav_icon"
              onClick={toggleDropdown}
            />
          </li>
          <li>
            {" "}
            <h2 className="app_logo">
              Movie<span style={{ color: "white" }}>Collector</span>
            </h2>{" "}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="nav_icon"
              onClick={toggleSearch}
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} className="nav_icon" />
          </li>
        </nav>
      </div>

      <DropdownMenu />

      <SearchBar />
    </Fragment>
  );
};

export default NavigationBar;
