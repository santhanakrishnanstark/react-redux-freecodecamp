import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from '@mui/material/Card';
import './Cart.css';
import Button from '@mui/material/Button'

const CartItem = ({ name, quantity, total, price, id }) => {
    const dispatch = useDispatch();
    const removeHandler = () => {
      dispatch(cartActions.removeFromCart(id));
    };
    const addHandler = () => {
      dispatch(
        cartActions.addToCart({
          id,
          name,
          price,
        })
      );
    };
    return (
      <Card className="cartItem">
        <h2> {name}</h2>
        <p>${price}</p>
        <p>x{quantity}</p>
        <article>Total ${total}</article>
        <Button variant="outlined" color="secondary" className="cart-actions" onClick={removeHandler}>
          -
        </Button>
        <Button variant="outlined" color="secondary" className="cart-actions" onClick={addHandler}>
          +
        </Button>
      </Card>
    );
};

export default CartItem;

