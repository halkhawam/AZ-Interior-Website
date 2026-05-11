import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile(){

const { logout } = useAuth();
const navigate = useNavigate();

const handleLogout = ()=>{
  logout();
  navigate("/auth"); // 🔥 هذا هو الحل
};

return(

<div className="container">

<h1>My Account</h1>

<p>Welcome to AZ Interior</p>

<button onClick={logout} className="logout-btn">
Logout
</button>

</div>

);

}