import React from 'react'
// import HomeLogo from './HomeLogo'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router'

export default function Background(props)  {
    console.log(props)
       
    

    // handleClick = () => {
    //     // this.setState({click: true})
    //     // if(this.state.click == true) {
    //    return  <Redirect to='/main'/>
    // } 

        
    return(
        
        <div className= 'body'>
             <button onClick={() => props.history.push('/home')} type='button' className= 'home-logo'>
                <h1>Judith's Barley Bags</h1>
                <p>Welcome, click here</p>
            </button>
        </div>
        
    )
 
}  
