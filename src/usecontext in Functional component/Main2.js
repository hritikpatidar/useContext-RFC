import React, { useContext } from 'react'
import { myname } from './CreateContext';

export default function Main2() {

    console.warn("change name")
    const accessMyName = useContext(myname);

    return (
        
        
        <div>
            <h1>Hii {accessMyName}</h1>
            
        </div>
    )
}
