import React,{useState} from "react";
function ApiToCartFetch(){

    const[users,setUsers]=useState([]);
    const[cart,setCart]=useState([])

    fetch("https://dummyjson.com/products")
    //fetch("https://fakestoreapi.com/products")
    .then((Response)=>Response.json())
    .then((data)=>{
        setUsers(data.products)
    })

return( <> <div id="mainCart">

<div id="state">
    Cart:{cart}
</div>

    <div id="map">{

users.map((user)=>{
return(

<div key={user.id}>
Product No:{user.id}
 
 <div id="imagediv">
    <img src={user.thumbnail} alt="Cart Product" id="image" />
</div>

<div id="info">
<ul id="data">
    <li>
        Catagory:{user.catagory}
    </li>
<li>
    Brand:{user.brand}
</li>
<li>
    Title:{user.title}
</li>
<li>Price:{user.price}</li>

</ul>
<div>
<button onClick={()=>{setCart(user.id)}}> ADD</button>

</div>

</div>
</div>
)
},[])
}
</div>
</div>
    
</>)

}
export default ApiToCartFetch;
