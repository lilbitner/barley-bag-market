import React from 'react'
import Judy from './Images/Judy.jpg'
import BarleyBag1 from './Images/BarleyBag1.jpeg'
import BarleyBag2 from './Images/BarleyBag2.jpeg'



export default class Body extends React.Component {
    
    
    
    render() {
        return(
            <>
            <div className='barley-basics'>
                <img src={BarleyBag1} alt='Bag' id='Barley-bag1' />
                <img src={Judy} alt='Judy' id='judy-picture'/>
                <img src={BarleyBag2} alt='Bag' id='Barley-bag2' />
              

            </div>
            <div className="testimonials">
                  <h3>"I tweaked my back Friday morning and on Friday night used my new Barley Bag and I was good as new on Saturday" - Brian Firooz</h3>
                  <h3>"Judith's Barley Bag is the best thing that ever happened to me - I heat it up 20 times a day" - Rachel Emmer</h3>
            </div>
            </>
        
        )
    }
}