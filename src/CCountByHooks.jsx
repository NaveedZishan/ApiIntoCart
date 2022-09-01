import React,{useState} from "react";
function Example(){
    const [count,setcount]=useState(0);
    return(
<>
<h1> This is the value to be Updated{count}</h1>
<button onClick={()=>setcount(count+1)}>Increments</button>
<button onClick={()=>setcount(count-1)}>Decrement</button>
</>

   )
}
export default Example;