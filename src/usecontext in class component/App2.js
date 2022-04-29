
import React from 'react'
import { UserProvider } from './createContext'
import Main from './Main'
export default class App2 extends React.Component{
    constructor(){
        super()
        this.state={
            name:" ritik"
        }
    };
   
    
    render(){
        return(
           
            <>
                <UserProvider value={this.state.name}>
                    <h1>useContext using class component</h1>
                    <Main  name={this.state.name}/>
                </UserProvider>
            </>
        )
    }
}