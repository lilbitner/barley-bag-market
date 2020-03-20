import React from 'react'
import {Redirect} from 'react-router'

export default function Background(props)  {
    
    return(
        
        <div className= 'body'>
             <button onClick={() => props.history.push('/home')} type='button' className= 'home-logo'>
                <h1>Judith's Barley Bags</h1>
                <p>Welcome, click here</p>
            </button>
        </div>
        
    )
 
}  
