import React from "react";
import '../../styles/order-confirmation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OrderConfirmation = () => {

    return(

       <div>
           <br/>
           <br/>
           <br/>
           <br/>
           
           <FontAwesomeIcon icon="fa-solid fa-check" size="lg" />
           <h1 className="order-confirmation"> Thank your for your order!</h1>
       </div>

       
        
    )
}

export default OrderConfirmation;