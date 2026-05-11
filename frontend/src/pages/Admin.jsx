import { useState } from "react";
import axios from "axios";

export default function Admin(){

const [name,setName]=useState("");
const [price,setPrice]=useState("");
const [image,setImage]=useState("");

const addProduct=async()=>{

await axios.post("http://localhost:5000/products",{
name,
price,
image
},{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
});

alert("Product added");

};

return(

<div className="form">

<h1>Admin Panel</h1>

<input placeholder="name"
onChange={e=>setName(e.target.value)}/>

<input placeholder="price"
onChange={e=>setPrice(e.target.value)}/>

<input placeholder="image url"
onChange={e=>setImage(e.target.value)}/>

<button onClick={addProduct}>Add Product</button>

</div>

);

}