import React, {useState} from 'react';
import './Room.css'

function Room() {
let [isLit,setLit] = useState(false);
let [age,setAge] = useState(23);
let [temp,setTemp] = useState(72);
//let hello = `Hello $(isLit) World`;



return (
//<div className= {"room "+(isLit?"lit":"dark")}>This Room is  {isLit? "Lit":"Dark"}
<div className= {`room  ${isLit? "lit": "dark"}`}>
    This Room is  {isLit? "Lit":"Dark"}
<br/>
Temp: {temp} <button onClick={()=>setTemp(++temp)}> ++ </button> <button onClick={()=>setTemp(--temp)}> -- </button>
<br/>
Age: {age} <button onClick={()=>{
console.log("increaseAge arrow function");
setAge(++age);}}>
    Increase Age
    </button>
<br/>

<button onClick={()=>setLit(!isLit)}>Toggle Light</button>
<br/>
<button onClick={()=>{
console.log("ON Button");
setLit(true);}}>ON</button>
<button onClick={()=>{
console.log("OFF Button");
setLit(false);}}>OFF</button>
<br/>
</div>
);
}

export default Room;
