import React,{ useReducer } from "react"

let initialState = {count:0};
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        case 'reset':
            return {count:state.count=0};
        default:
            return {count:state.count};            
    }
}

const Counter1 = ()=>{
    const[state,dispatch] = useReducer(reducer,initialState)

    return (
      <>
       Count : {state.count}
       <br/>
       <button onClick = {()=>dispatch({type:'increment'})}>Increment</button>
       <button onClick = {()=>dispatch({type:'decrement'})}>Decrement</button>
       <button onClick = {()=>dispatch({type:'reset'})}>Reset</button>
       
      </>
    )
}

export default Counter1;