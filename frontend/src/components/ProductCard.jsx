import { Link } from "react-router-dom";

export default function ProductCard({product}){

return(

<div className="card">

<img src={product.image}/>

<h3>{product.name}</h3>

<p>£{product.price}</p>

<Link to={`/product/${product._id}`}>View</Link>

</div>

);

}