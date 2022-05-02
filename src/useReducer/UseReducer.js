import React, { useReducer, useState } from 'react'


let rootReducer =(oldState , action)=>{
    let newState = oldState;
    //console.log(action.type);

    if(action.type === "Increment"){
        return newState + 1;
    }else if(action.type === "Dicrement"){
        return newState -1;
    }else{
        return newState;
    }
    
}


export default function UseReducer() {
    //state 
    const [data, setData] = useState(100);
    
    //lets create a useReducer
    const [newState , dispatch] = useReducer(rootReducer,data)


    //function defination
    



    //return statement/jsx
    return (
        <div>
            <h1>Increment and Dicrement useing useReducer</h1>
            <h1>{newState}</h1>
            <button onClick={ ()=>{ dispatch({type:"Increment"}) } }>Increment</button>
            <button onClick={ ()=>{ dispatch({type:"Dicrement"}) } }>Dicrement</button>
        </div>
    )
}
