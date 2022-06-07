import './Footer.css';
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';

const Footer = () => {

    let total = 0;
    const itemsList = useSelector(state => state.cart.itemsList);
    itemsList && itemsList.forEach(item => {
        total += item.totalPrice
    })

    return ( 
        <footer className="total-price">
            <h3>Total: ${total}</h3>
            <Button variant="contained" className="orderBtn" color="success">
                Place Order
            </Button>
        </footer>
     );
}
 
export default Footer;