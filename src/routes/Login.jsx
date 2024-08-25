import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('machi@email.com');
    const [password, setPassword] = useState('machi420');

    const { loginUser } = useContext(UserContext);  
    const navigate = useNavigate();  

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('processing form', email, password);
        try {
            await loginUser(email, password);
            console.log('Usuario encontrado.')
            navigate('/');
        } catch (error) {
            console.log(error.code);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login