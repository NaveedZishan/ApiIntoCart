import React,{useState,useEffect} from "react";
function Exxample(){
const[count,setcount]=useState(0);
useEffect(()=>{document.title=`you clicked ${count}`});
//useEffect(() => {document.title = `You clicked ${count} times`;  });
return(
<>


<h1> this is a counter{count}</h1>
<button onClick={()=>setcount(count+1)}>Increment</button>
  

</>


)



}

export default Exxample;