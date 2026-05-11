import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth(){

const navigate = useNavigate();
const { continueAsGuest } = useAuth();

return(

<div className="auth-container">

<div className="auth-box">

<img src="azlogo.jfif" className="auth-logo"/>

<h1>AZ Interior</h1>

<p>Luxury Furniture Experience</p>

<button onClick={()=>navigate("/login")}>
Login
</button>

<button onClick={()=>navigate("/register")}>
Create Account
</button>

<button onClick={()=>{
continueAsGuest();
navigate("/");
}}>
Continue as Guest
</button>

</div>

</div>

);
}