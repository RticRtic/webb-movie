
import React from "react"; 
import '../../styles/navbar.css';
import '../../styles/fa-icons.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faHouse, faFilm } from "@fortawesome/free-solid-svg-icons";


const NavigationBar = ({device}) => {



    return (device == 'web') ? 
    //Navigation Bar - Web
    (
        <div className="navbar_web">
            <nav>
                <li>
                    <h2 className="app_logo">Movie<span style={{color: 'white'}}>Collector</span></h2>
                </li>

                <div>

                    <section className="navbar_web_navholder">
                        <li>Home<FontAwesomeIcon icon={faHouse} className='nav_icon'/></li>
                        
                        <li>Catalog<FontAwesomeIcon icon={faFilm} className='nav_icon'/></li>
                    </section>

                    <section className="navbar_web_iconholder">
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} className='nav_icon'/>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUser} className='nav_icon'/>
                        </li>
                    </section>

                </div>
                
                
                
            </nav>
        </div>
    )

    :

    //Navigation Bar - Mobile
    (
        <div className="navbar_mobile">

        </div>
    )

}

export default NavigationBar;