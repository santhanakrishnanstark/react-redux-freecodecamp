import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import './Cart.css';

const Cart = () => {

    const quantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const showCart = () => {
        dispatch(cartActions.setShowCart());
    }

    return ( 
        <>
            <h3 onClick={showCart}>Cart: {quantity} Items</h3>
        </>
     );
}
 
export default Cart;