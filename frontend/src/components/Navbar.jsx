import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar(){

const { user, isGuest } = useAuth();

return(

<nav className="navbar">

<div className="logo-container">
<img src="azlogo.jfif" className="logo"/>
<h2>AZ Interior</h2>
</div>

<div>


{!user && !isGuest && null}


{!user && isGuest && (
<>
<Link to="/">Home</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</>
)}


{user && (
<>
<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>
<Link to="/profile">👤</Link>
</>
)}

</div>

</nav>

);
}