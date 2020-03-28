import React from 'react'
import JudyBags from './Images/JudyBags.jpeg'
import Nav from './NavigationPages/Nav'
import Footer from './FooterPages/Footer'
import '../styling/BodyPage.css'


export default class Body extends React.Component {
    
  
    render() {
        return(
            <>
            <Nav />
            <div className='barley-basics'>
                
               <div className='card'>
                   <h4>What is a barley bag?</h4>
                   <h5> Using one of nature’s most efficient temperature-retaining grains, 
                        I have created a series of 100% cotton bags filled with the perfect 
                        amount of barley designed to maintain optimum levels of either heat or cold.</h5>
                    <h5>My barley bags are your homemade, organic solution to:</h5>
                    <ul id='barleybaguselist'>
                        <li>Warm up on a cold winter night</li>
                        <li>Cool off on a hot summer day</li>
                        <li>Soothe those aching muscles with heat or cold</li>
                    </ul>
                    <h5>Simply pop in the microwave for 2-21/2 minutes for heat and place in your freezer
                        for 20 minutes for cold therapy.  Repeat as needed throughout the day or night!</h5>
               </div>
               <div className='judy'> 
                    <img src={JudyBags} id='judy-picture' />
               </div>

            </div>
            <Footer /> 
            </>
        
        )
    }
}