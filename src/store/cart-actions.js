import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://redux-shopping-f8835-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json');
            return res.json();
        }

        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData));
        }catch(err) {
            // send state as error
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Sending Request failed',
                type: 'error'
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        // send state as sending request
        dispatch(uiActions.showNotification({
            open: true,
            message: 'Sending Request',
            type: 'warning'
        }));

        const sendRequest = async () => {
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

        try {
            await sendRequest();
        } catch(err) {
            // send state as error
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Sending Request failed',
                type: 'error'
            }));
        }
    }
}