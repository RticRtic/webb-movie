import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { splitDate } from '../../models/constants';
import { actions } from '../../features/shoppingcartReducer';

import '../../styles/shopping-cart.css';
import { Link, useNavigate } from 'react-router-dom';


const ShoppingCart = ({ device, toggleShoppingCart }) => {


    let cartProducts = useSelector(state => state.shoppingCart);

    let navigate = useNavigate();

    let dispatch = useDispatch();

    const handleRemove = (movieId) => {
        console.log('removing');
        dispatch(actions.removeMovie(movieId))
    };

    const CartItems = () => {



        return (
            <ul className='cart_item_container'>
                {cartProducts.map(movie => (
                    <li key={movie.id} className='cart_item'>

                        <img className='cart_item_image' src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} />

                        <div className='cart_item_name'>

                            <span>{movie.title} <span style={{ color: 'rgb(203, 203, 203)', fontWeight: 'lighter' }}>({splitDate(movie.release_date)})</span></span>
                            <span style={{ fontWeight: 'lighter' }}>$8</span>

                        </div>

                        <aside className='cart_item_remove'>

                            <i onClick={() => handleRemove(movie.id)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </i>

                        </aside>
                    </li>
                ))}
            </ul>

        )

    }

    return (
        <div className='shopping_cart_cover'>
            <div className='shopping_cart_container'>
                <div className='shopping_cart_info'>
                    <header>
                        {(device == 'web') ?
                            (
                                <Fragment>
                                    <span>Product</span>
                                </Fragment>

                            )
                            :
                            (
                                <Fragment>
                                    <span><span>You have {cartProducts.length} items in your cart </span><FontAwesomeIcon className='shopping_cart_close' onClick={toggleShoppingCart} icon={faXmark} /></span>
                                </Fragment>

                            )
                        }

                    </header>
                    <CartItems />
                </div>
                <div className='shopping_cart_total'>

                    <header>

                        <span>You have {cartProducts.length} items in your cart</span>
                        <FontAwesomeIcon className='shopping_cart_close' icon={faXmark} onClick={toggleShoppingCart} />

                    </header>

                    <div className='shopping_cart_pricetotal'>
                        <article className='cart_total'>
                            <span>Total</span>
                            <span>${cartProducts.length * 8}</span>
                        </article>

                    </div>

                    <div className='shopping_cart_checkout'>
                        <article className='cart_checkout'>
                            <span>To Pay</span>
                            <span>${cartProducts.length * 8}</span>
                        </article>
                        <button className='cart_checkout_btn' onClick={() => {
                            toggleShoppingCart(false);
                            navigate("/checkout");
                        }}>CHECKOUT</button>
                    </div>
                </div>
            </div>

            {(device == 'web') ?
                (
                    null
                )
                :
                (
                    <div className='shopping_cart_total_mobile'>
                        <span >
                            <span>Total <br /> ${cartProducts.length * 8}</span>
                        </span>
                        <span>
                            <button className='cart_checkout_mobile' onClick={() => {
                                toggleShoppingCart(false);
                                navigate("/checkout");
                            }}>CHECKOUT</button>
                        </span>
                    </div>
                )
            }

            <div className='shopping_cart_emptyspace' onClick={toggleShoppingCart}></div>

        </div>
    )

}


export default ShoppingCart;