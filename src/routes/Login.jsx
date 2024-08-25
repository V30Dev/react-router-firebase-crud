import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { user, setUser } = useContext(UserContext);  
    const navigate = useNavigate();  

    const handleLogin = () => {
        setUser(!user);
        navigate('/');
    }

    return (
        <>
            <h1>Login</h1>
            <h2>{user ? "Online" : "Offline"}</h2>
            <button onClick={handleLogin}>Sign in</button>
        </>
    )
}

export default Login