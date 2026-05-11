import API from "../services/api";

export default function Checkout(){

const pay=async()=>{

const res=await API.post("/payment/create-checkout-session",{
items:[]
});

window.location=res.data.url;

};

return(

<button onClick={pay}>
Pay with Card
</button>

);

}