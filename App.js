import Counter1 from './components/useReducer';
import React,{useRef} from 'react';

function App() {
  let inputRef  = useRef(null);
  function myFunc(){
    console.log("Run");
    inputRef.current.value = "1000000";
    inputRef.current.style.color = "blue";
    inputRef.current.focus();
  }
  return (
    <>
    <input type = "text" ref = {inputRef}></input>
  <button onClick ={myFunc}>Handle it</button>
    <Counter1/>
    </>
  );
}
export default App;
