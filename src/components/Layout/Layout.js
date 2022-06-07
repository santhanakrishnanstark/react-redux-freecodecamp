import { useSelector } from "react-redux";
import CartItems from "../Cart/CartItems";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Products from "../Product/Products";
import './Layout.css';

const Layout = () => {

    const showCart  = useSelector(state => state.cart.showCart);

    return (
        <>
            <Header />
            <main>
                <Products />
                {showCart && <CartItems />}
            </main>
            <Footer />
        </>
    )
}

export default Layout;