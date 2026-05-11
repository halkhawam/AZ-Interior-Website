export default function SearchBar({setSearch}){

return(

<input
placeholder="Search furniture..."
onChange={(e)=>setSearch(e.target.value)}
/>

);

}