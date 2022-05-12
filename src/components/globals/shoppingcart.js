import { useSelector } from 'react-redux';
import '../../styles/shopping-cart.css';

const ShoppingCart = ({}) => {

    const cartProducts = useSelector(state => state.shoppingCart);



    return (
        <div className='shopping_cart_cover'>
            <div className='shopping_cart_container'>
                <div className='shopping_cart_product_info'>
                    <header>
                        <span>Product</span>
                        <span>Price</span>
                    </header>
                    <ul>
                        
                    </ul>
                </div>
                <aside className='shopping_cart_info'>

                </aside>
            </div>
        </div>
    )

}

export default ShoppingCart;