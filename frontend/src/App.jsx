import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import { useAuth } from "./context/AuthContext";

export default function App(){

const { user, isGuest } = useAuth();

return(

<>

<Navbar/>

<Routes>

<Route path="/" element={
(user || isGuest) ? <Home/> : <Navigate to="/auth"/>
}/>

<Route path="/auth" element={<Auth/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/product/:id" element={<Product/>}/>

<Route path="/cart" element={
user ? <Cart/> : <Navigate to="/login"/>
}/>

<Route path="/profile" element={
user ? <Profile/> : <Navigate to="/auth"/>
}/>

</Routes>

</>

);
}