import  { Component} from 'react'
import {  UserConsumer } from './createContext'
export default class Main3 extends Component {

    // Use const ___Context = React. createContext() to create context.
    // Pull ___Context. Provider and ___Context. Consumer out of ___Context.
    // Wrap Provider around your parent component.
    // A class can consume with static contextType = ___Context.
    // A functional component can consume with const x = useContext(___Context)
   
    render() {
        return(
            <UserConsumer>
                {(value)=>{
                    return(
                        <>
                        <h1>hello{ value}</h1>
                        </>
                    )
                }}
                
            </UserConsumer>
          
            
        )
    }
}
