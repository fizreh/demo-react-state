import React, { useState } from 'react';
import Room from './Room';

function App() {
  
 // const [isLit,setLit] = useState(true);
  const state = useState(true);
  console.log(state);
  return (
    <div><Room> </Room></div>
  );
} 

export default App;
