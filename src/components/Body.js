import React from 'react'
import Judy from './Images/Judy.jpg'
import JudyBags from './Images/JudyBags.jpeg'





export default class Body extends React.Component {
    
    state={
        path: window.location.pathname
    }
    reRender() {
        this.setState({path: window.location.pathname})
     } 
    render() {
        return(
            <>
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
               {/* <div className='testimonialCard'>
                <h3>"I tweaked my back Friday morning and on Friday night used my new Barley Bag and I was good as new on Saturday" - Brian Firooz</h3>
                  <h3>"Judith's Barley Bag is the best thing that ever happened to me - I heat it up 20 times a day" - Rachel Emmer</h3>
               </div> */}
               <div className='judy'> 
               <img src={JudyBags} id='judy-picture' />
               </div>
                {/* <img src={Judy} alt='Judy' id='judy-picture'/> */}

               
              

            </div>
            {/* <div className="testimonials">
                  <h3>"I tweaked my back Friday morning and on Friday night used my new Barley Bag and I was good as new on Saturday" - Brian Firooz</h3>
                  <h3>"Judith's Barley Bag is the best thing that ever happened to me - I heat it up 20 times a day" - Rachel Emmer</h3>
            </div> */}
            </>
        
        )
    }
}