import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Product(){

const { id } = useParams();
const { user } = useAuth(); // ✅ داخل component

const [product, setProduct] = useState(null);

useEffect(()=>{
  API.get(`/products/${id}`)
  .then(res=>setProduct(res.data));
},[id]);

const addToCart = async()=>{

if(!user){
  alert("Please login first");
  return;
}

await API.post("/cart/add",{
  productId: product._id,
  quantity: 1
});

alert("Added to cart");
};

if(!product) return <h2>Loading...</h2>;

return(

<div className="container">

<img src={product.image} />

<h1>{product.name}</h1>
<p>{product.description}</p>
<h2>${product.price}</h2>

<button onClick={addToCart}>
Add to Cart
</button>

</div>

);
}