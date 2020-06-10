import React, {useState} from 'react';
import './Room.css'

function Room() {
let [isLit,setLit] = useState(false);
let [age,setAge] = useState(23);
//let hello = `Hello $(isLit) World`;
//const state = useState(true);
//console.log("State= ",state);



return (
//<div className= {"room "+(isLit?"lit":"dark")}>This Room is  {isLit? "Lit":"Dark"}
<div className= {`room  ${isLit? "lit": "dark"}`}>
    This Room is  {isLit? "Lit":"Dark"}
<br/>
Age: {age}
<br/>
<button onClick={()=>setLit(!isLit)}>Toggle Light
    </button>
<br/>
<button onClick={()=>{
console.log("increaseAge arrow function");
setAge(++age);}}>
    Increase Age
    </button>
</div>
);
}

export default Room;
