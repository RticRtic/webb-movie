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


import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "./shoppingCart";
import { signOut } from "../../models/firebaseModel";


const NavigationBar = ({ device, toggleShoppingCart}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isShowingUserMenu, setIsShowingUserMenu] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  let cartProducts = useSelector(state => state.shoppingCart);
  let user = useSelector(state => state.user);

  let location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();


  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const toggleUserDropdown = () => {
    setIsShowingUserMenu(!isShowingUserMenu);
  };

  useEffect(() => {
    setIsSearching(false);
    setDropdownActive(false);
  }, [location]);

  //-----------------------------------------------------

  const UserDropdown = () => {

    if(isShowingUserMenu) {
      return (
      <ul className="user_dropdown">

        {(isSigningOut) ? 
        (
          <li className="loader"/>
        )
        :
        (
          <Fragment>
            <li>
              Signed in as 
              <br/>
              <span>{user.username}</span>
            </li>
            
            <li onClick={() => {
              navigate("user/" + user.username);
              toggleUserDropdown();
              }}> View Profile </li>
              
            <li onClick={() => {
              
              signOut(dispatch);
              toggleUserDropdown();
              }}> Sign Out</li>
          </Fragment>
        )
      }
        

      </ul>
      )
    }

  };


  //-----------------------------------------------------

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
          <li className="dropdown_item" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faHouse} className="nav_icon"  />
            Home
          </li>
          <li className="dropdown_item" onClick={() => navigate('/catalog')}>
            <FontAwesomeIcon icon={faFilm} className="nav_icon" />
            Catalog
          </li>
        </div>
      </div>
    ) : null;
  };

  //-----------------------------------------------------

  return device == "web" ? (
    //Navigation Bar - Web
    <div className={"navbar" + " " + "web"}>
      <nav>
        <li onClick={() => navigate("/")}>
          <h2 className="app_logo">
            Movie<span style={{ color: "white" }}>Collector</span>
          </h2>
        </li>

        <div>
          <section className="web_navholder">

            <li className={(location.pathname == "/") ? "nav_active" : ""} onClick={() => navigate('/')} >Home</li>

            <li className={(location.pathname == "/catalog") ? "nav_active" : ""} onClick={() => navigate('/catalog')} >Catalog</li>

            <SearchBar isSearching={isSearching} toggleSearch={toggleSearch} device={device}/>

          </section>
          <section className="web_iconholder">
            <li className="shopping_cart_holder">
              <FontAwesomeIcon icon={faCartShopping} className="nav_icon" onClick={toggleShoppingCart} />
              {(cartProducts.length > 0) ? (<span className="cart_icon_total">{cartProducts.length}</span>) : (null)}
            </li>

            <li>
              {(user.signedIn && user.username != undefined) ?
              (
                <Fragment>
                <i className="user_icon" onClick={() => toggleUserDropdown()}>{user.username[0].toUpperCase()}</i>

                <UserDropdown/>
              </Fragment>
              )
              :
              (
              <FontAwesomeIcon icon={faUser} className="nav_icon" onClick={() => {
                navigate("/login");
              }}/>
              )
              }
              
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
          <li onClick={() => navigate("/")}>
            <h2 className="app_logo">
              Movie<span style={{ color: "white" }}>Collector</span>
            </h2>
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

          <li>
              {(user.signedIn && user.username != undefined) ?
              (
                <Fragment>
                <i className="user_icon" onClick={() => toggleUserDropdown()}>{user.username[0].toUpperCase()}</i>

                <UserDropdown/>
              </Fragment>
              )
              :
              (
              <FontAwesomeIcon icon={faUser} className="nav_icon" onClick={() => {
                navigate("/login");
              }}/>
              )
              }
              
            </li>

        </nav>
      </div>

      <DropdownMenu />


      
      <SearchBar isSearching={isSearching} toggleSearch={toggleSearch} device={device}/>



    </Fragment>
  );
};

export default NavigationBar;
