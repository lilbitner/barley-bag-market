import React from 'react'
import { render } from '@testing-library/react'
import Riley from '../Images/Riley.jpeg'
import PinkHip from '../Images/PinkHip.jpeg'
import BlueHip from '../Images/BlueHip.jpeg'
import JumbleHip from '../Images/GroupHipJumble.jpeg'
import Nav from './Nav'
import Footer from '../FooterPages/Footer'
import '../../styling/ReviewPage.css'



export default class AboutBB extends React.Component {

    state = {
        description: '', 
        title: ''
    }


    handleChange = (event) => {
        let {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.closeForm) {
        this.props.closeForm(false)}
        this.props.addReview(this.state)
    }

    
    render() {

        return(
            <>
            <Nav />

            <figure className='bagImagesGroup'> 
                <img className='reviewImages' src={PinkHip} alt='bag' />
                <img className='reviewImages' src={BlueHip} alt='bag'/>
                <img className='reviewImages' src={JumbleHip} alt='bag'/>
                </figure>

            <h1 id='reviewTitle'>We want to hear from you!</h1>
            <div className='reviews'>

                <form onSubmit={this.handleSubmit} className='reviewForm'> 
                    <h4>Do you like your bag?</h4>
                    <label htmlFor='reviewContent'>Please share your thoughts below:</label>
                    <br></br>
                    <textarea id = 'reviewContent' type='text' name='description' rows='14' cols='10' wrap='soft' 
                        value={this.state.description} onChange={this.handleChange} 
                    />
                    <br></br>
                    <label htmlFor='titleInput'>Name:</label>
                    <input id= 'titleInput' type='text' name='title'  
                        value={this.state.title} onChange={this.handleChange}
                    /> 
                    <br></br>
                    <input id='submitReview' type='submit'/>
                    {this.props.isReview ?
                        <>
                        <h3 id='rileyFeedback'>Riley thanks you for your feedback!</h3> 
                        <img src={Riley} id='Riley' alt="Riley" /> 
                        </>
                    : null}
                </form>
             
                <div className='testimonialCard'>
                        <h1>Verified Reviews</h1>
                        <hr></hr>
                        <h3>"I tweaked my back Friday morning and on Friday night used 
                            my new Barley Bag and I was good as new on Saturday" - Brian Firooz
                        </h3>
                        <hr></hr>
                        <h3>"Judith's Barley Bag is the best thing that ever happened
                             to me - I heat it up to 20 times a day" - Rachel Emmer
                        </h3>
                        <hr></hr>
                        <h3>"I heat this up right away when I wake-up, and right before I 
                            go to bed - it is a staple in my routine now and I love it!' -Lillian Bitner
                        </h3>
                </div> 
               
            </div>
            <Footer />
            </>
        )
    }
}