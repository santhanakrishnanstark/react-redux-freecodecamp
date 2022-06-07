import Cart from "../Cart/Cart";
import './Header.css';
import Button from '@mui/material/Button'
import { useDispatch } from "react-redux";
import { authActions } from '../../store/auth-slice';

const Header = () => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    }

    return ( 
        <header>
            <h1>Redux Shoping</h1>
            <Cart />
            <Button variant="contained" color="warning" onClick={logout}>
              Logout
            </Button>
        </header>
     );
}
 
export default Header;