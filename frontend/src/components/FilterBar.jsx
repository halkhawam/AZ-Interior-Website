export default function FilterBar({setCategory}){

return(

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="">All</option>
<option value="sofa">Sofa</option>
<option value="table">Table</option>
<option value="chair">Chair</option>

</select>

);

}