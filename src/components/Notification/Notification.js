import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Notification = ({type, message}) => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.ui.notification.open);

    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false
        }))
    }

    return ( 
        <div>
            {isOpen && <Alert severity={type} onClose={handleClose} >{message}</Alert>}
        </div>
     );
}
 
export default Notification;