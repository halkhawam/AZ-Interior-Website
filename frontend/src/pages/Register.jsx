import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register(){

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const register = async()=>{

await API.post("/users/register",{name,email,password});

navigate("/login");
};

return(

<div className="form">

<h1>Create Account</h1>

<input onChange={e=>setName(e.target.value)} placeholder="name"/>
<input onChange={e=>setEmail(e.target.value)} placeholder="email"/>
<input type="password" onChange={e=>setPassword(e.target.value)} placeholder="password"/>

<button onClick={register}>Create Account</button>

</div>

);
}