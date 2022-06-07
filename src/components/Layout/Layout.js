import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, sendCartData } from "../../store/cart-actions";
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
        dispatch(fetchData());
    }, [dispatch])

    useEffect(() => {
        if(firstRender) {
            firstRender = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }

    }, [cart, dispatch]);

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