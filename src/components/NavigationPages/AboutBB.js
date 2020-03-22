import React from 'react'
import { render } from '@testing-library/react'
import ReviewCard from './Reviewcard'

export default class AboutBB extends React.Component {

    state = {
        reviews: [{description: 'hello', star: 3}]
    }
    
    card = () => {
       return this.state.reviews.map(review => {
           return <ReviewCard review={review} />
        })
    }
    
    render() {

        return(
            <div className='reviews'>
                <form className='reviewForm'> 
                    
                    <h4>Do you like your bag?</h4>
                    <label for='reviewContent'>Share your thoughts below:</label>
                    <textarea id = 'reviewContent' type='text' name='description' rows='14' cols='10' wrap='soft' />
                    <label for='title'>Name</label>
                    <input id= 'title' type='text' name='title' placeholder='Name'/> 
                    <br></br>
                    <input id='submit' type='submit'/>
                </form>
                {/* {this.card()} */}
                {/* <div className='testimonialCard'>
                        <h3>"I tweaked my back Friday morning and on Friday night used my new Barley Bag and I was good as new on Saturday" - Brian Firooz</h3>
                        <h3>"Judith's Barley Bag is the best thing that ever happened to me - I heat it up to 20 times a day" - Rachel Emmer</h3>
                </div>  */}
            </div>
        )
    }
}