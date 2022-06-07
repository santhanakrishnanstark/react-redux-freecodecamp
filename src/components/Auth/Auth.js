import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import './Auth.css';

const Auth = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    }

    return (
        <div className="auth-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <TextField fullWidth label="Name" id="id" margin="normal" />
                <TextField fullWidth label="Password" id="password" margin="normal" />
                <Button variant="contained" type="submit" size="large" sx={{marginTop: 1}}>
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Auth;