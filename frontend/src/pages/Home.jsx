import {useEffect,useState} from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

export default function Home(){

const [products,setProducts]=useState([]);
const [search,setSearch]=useState("");
const [category,setCategory]=useState("");

useEffect(()=>{

API.get("/products")
.then(res=>setProducts(res.data));

},[]);

const filtered = products.filter(p=>{

return(
p.name.toLowerCase().includes(search.toLowerCase()) &&
(category==="" || p.category===category)
);

});

return(

<div className="container">

<SearchBar setSearch={setSearch}/>
<FilterBar setCategory={setCategory}/>

<div className="grid">

{filtered.map(p=>(
<ProductCard key={p._id} product={p}/>
))}

</div>

</div>

);

}