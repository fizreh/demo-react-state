import React, {useState} from 'react';


function Room() {
let [isLit,setLit] = useState(false);
let [age,setAge] = useState(23);

//const state = useState(true);
//console.log("State= ",state);



return (
<div>This Room is  {isLit? "Lit":"Dark"}
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
