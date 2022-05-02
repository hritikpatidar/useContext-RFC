import React, { useState } from 'react'
import { useCallback } from 'react';
import UseCallBack from '../useCallback/UseCallBack'

export default function Home1() {
    const [value, setValue] = useState(100);
    const [name , setName] = useState("ritik")



    //2.function defination
    let changeName = useCallback(()=>{
        console.log('okok')
        setName("arjun")
    },[name])

    let increment = useCallback(() =>{
        setValue(value + 1)
    },[value])
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={()=>{increment()}}>Increment</button>
            <UseCallBack  name={name}/>
            <button onClick={()=>{changeName()}}>dicrement</button>
        </div>
    )
}
