import { useEffect,useState } from "react";
import API from "../services/api";

export default function Cart(){

const [cart,setCart] = useState(null);

useEffect(()=>{

API.get("/cart")
.then(res=>setCart(res.data));

},[]);


if(!cart || cart.items.length === 0)
return <h2>Your cart is empty</h2>;


let total = 0;

cart.items.forEach(i=>{
total += i.product.price * i.quantity;
});


return(

<div className="container">

<h1>Your Cart</h1>

{cart.items.map(i=>(

<div key={i._id} className="card">

<img src={i.product.image} width="100"/>

<h3>{i.product.name}</h3>

<p>Qty: {i.quantity}</p>

<p>${i.product.price}</p>

</div>

))}

<h2>Total: ${total}</h2>

</div>

);

}