import React, { useRef } from 'react'

export default function Home() {
    let inputRef = useRef();


    function handalInput(){
        //console.log("okokokok");
        
        inputRef.current.style.color="red"
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <h1>useRef Hook In React</h1>
            <input type="text" ref={inputRef} />
            <button onClick={()=>handalInput()}>hendalInput</button>
        </div>
    )
}
