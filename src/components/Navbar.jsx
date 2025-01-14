import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Navbar = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>

            {user ? (
                <>
                    <NavLink to={'/'} >Home</NavLink>
                    <button onClick={() => { setUser(!user) }}>Logout</button>
                </>
            ) : (
                <NavLink to={'/login'}>Login</NavLink>
            )}
        </div>
    )
}

export default Navbar