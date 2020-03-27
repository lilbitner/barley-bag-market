import React from 'react'
import '../styling/LandingPage.css'

export default function Background(props)  {
    
    return(
        
        <div className= 'landingBody'>
             <button onClick={() => props.history.push('/home')} type='button' className= 'home-logo'>
                <h1>Judith's Barley Bags</h1>
                <p>Welcome, click here</p>
            </button>
        </div>
        
    )
 
}  
