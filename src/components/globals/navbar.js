
import React, { Fragment, useEffect, useState } from "react";
import "../../styles/navbar.css";
import "../../styles/fa-icons.css";
import "../../styles/searchBar.css";

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
import SearchBar from "./searchBar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCart from "./shoppingCart";

const NavigationBar = ({ device, toggleShoppingCart}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  let cartProducts = useSelector(state => state.shoppingCart);

  let location = useLocation();


  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  useEffect(() => {
    setIsSearching(false);
  },[location])


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

            <SearchBar isSearching={isSearching} toggleSearch={toggleSearch} device={device}/>
          </section>
          <section className="web_iconholder">
            <li className="shopping_cart_holder">
              <FontAwesomeIcon icon={faCartShopping} className="nav_icon" onClick={toggleShoppingCart} />
              {(cartProducts.length > 0) ? (<span className="cart_icon_total">{cartProducts.length}</span>) : (null)}
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
            {""}
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
          <li className="shopping_cart_holder">
            <FontAwesomeIcon icon={faCartShopping} className="nav_icon" onClick={toggleShoppingCart} />
            {(cartProducts.length > 0) ? (<span className="cart_icon_total">{cartProducts.length}</span>) : (null)}
          </li>
        </nav>
      </div>

      <DropdownMenu />

      
      <SearchBar isSearching={isSearching} toggleSearch={toggleSearch} device={device}/>


    </Fragment>
  );
};

export default NavigationBar;
