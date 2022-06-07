import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartItems from "../Cart/CartItems";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Notification from "../Notification/Notification";
import Products from "../Product/Products";
import './Layout.css';

let firstRender = true;

const Layout = () => {

    const showCart  = useSelector(state => state.cart.showCart);
    const notification = useSelector(state => state.ui.notification);

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if(firstRender) {
            firstRender = false;
            return;
        }
        const sendRequest = async () => {
            // send state as sending request
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Sending Request',
                type: 'warning'
            }));
            
            const res = await fetch('https://redux-shopping-f8835-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
                method: "PUT",
                body: JSON.stringify(cart)
            });
            const data = await res.json();
            // send state as request is successful
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Send Request to database successfully',
                type: 'success'
            }));
        }

        sendRequest().catch(err => {
            // send state as error
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Sending Request failed',
                type: 'error'
            }));
        });
    }, [cart]);

    return (
        <>
            <Header />
            {notification && <Notification type={notification.type} message={notification.message} />}
            <main>
                <Products />
                {showCart && <CartItems />}
            </main>
            <Footer />
        </>
    )
}

export default Layout;