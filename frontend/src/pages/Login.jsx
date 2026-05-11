import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login(){

const { login } = useAuth();
const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleLogin = async()=>{

const res = await API.post("/users/login",{email,password});

login(res.data.token);

navigate("/");
};

return(

<div className="form">

<h1>Login</h1>

<input onChange={e=>setEmail(e.target.value)} placeholder="email"/>
<input type="password" onChange={e=>setPassword(e.target.value)} placeholder="password"/>

<button onClick={handleLogin}>Login</button>

</div>

);
}