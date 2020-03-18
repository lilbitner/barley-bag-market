import React from 'react'
import Judy from './Judy.jpg'



export default class Body extends React.Component {
    
    
    
    render() {
        return(
            <div className='barley-basics'>
                <div className='barley-description'>
                    <h2 id ='what-is-barley-bag'>
                        What is a Barley Bag? 
                    </h2>
                    <p id='what-is-description'> 
                        A Barley Bag is a personal bag filled with barley straight from the store to warm or cool you as needed. 
                    </p>
                    <ul id='purpose-list'>
                    What you can do with it? 
                            <li>Heat it in the microwave to act as a warming pad for sore muscles, or to squeeze on a cold winter day.</li>
                            <li>Place the bag in the fridge to create a cold pack for sore muscles, or to squeeze on a warm summer day.</li>
                    </ul>
                    
                </div>
                <img src={Judy} alt='Judy' id='judy-picture'/>
            </div>
        )
    }
}