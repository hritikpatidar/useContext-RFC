import React, { useState } from 'react'
import { myname } from './CreateContext';
import Main2 from './Main2';

function App(){
    //state

    const [name, setName] = useState("ritik")
    const [value, setValue] = useState(0)

    //function defination


    //return statement
    return(
        <>
            <myname.Provider value={name}>
                <h1>useContext using Functional component</h1>
                <h1>{value}</h1>
                <Main2 value={name}/>
                <button onClick={ ()=>setName("ankush") }>click me</button>
                <button onClick={ ()=>setValue(value+1) }>Increment</button>
            </myname.Provider>
        </>
    )   
}

export default App;