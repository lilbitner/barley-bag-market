import React from 'react'
import CarouselImages from './Carousel'
import SmallSize from '../Images/SmallSize.jpeg'
import LongSize from '../Images/LongSize.jpeg'
import MediumSize from '../Images/MediumSize.jpeg'
import Nav from './Nav'
import Footer from '../FooterPages/Footer'
// import Carousel from 'react-bootstrap/Carousel'

export default class Shop extends React.Component {
   

    state= {
        fabric: '',
        size: '',
        favor: '',
        title: '',
        email:''
    }

    handleChange = (event) => {
        let {name, value} = event.target 
        console.log(event.target) 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.closeForm) {
        this.props.closeForm(false)};
        this.props.addBag(this.state);
        event.target.reset()
    }

    resetState = () => {
        this.setState({
            fabric: '', 
            size: '',
            favor: '', 
            title: '', 
            email: ''
        })
    }


    handleSubmission = () => {
        this.resetState()
        // window.location.reload(false);
        window.scrollTo(0,0);
        window.location.href = window.location.href
    }

    render() {
        return(
            <>
            <Nav />
            <h1 id='shop-title'>Customize your own bag!</h1>
            <h3 id='step1'>Step 1: Pick your fabric</h3>
            <CarouselImages/>
            <form id='form' onSubmit={this.handleSubmit}> 
                <div className='dropdown'>
                    {/* <FabricDropDown /> */}
                    <h4 className='selections'>Select your fabric</h4>
                    <select id='fabric-input' name='fabric' value={this.state.fabric}  onChange={this.handleChange}>
                        <option value='' disabled selected hidden>Select a fabric</option>
                        <option value='Orange'>OrangeTastic</option>
                        <option value='SeaWaves'>SeaWaves</option>
                        <option value='Pink'>Bubblegum</option>
                        <option value='Winter'>WinterFlowers</option>
                        <option value='Spring'>SpringFlowers</option>
                        <option value='Green'>ForestFlowers</option>
                        <option value='BlackWhite'>Dalmatian</option>
                        <option value='Classic'>Classic</option>
                        <option value='LavaLamp'>LavaLamp</option>
                        <option value='SeaFoam'>SeaFoam</option>
                        <option value='StrongPrint'>StrongPrint</option>
                    </select>
                </div>
                <h3 id='step1'>Step 2: Pick your size</h3>
                <div className='sizeContainer'>
                        <figure> 
                            <input type='image' id='size1' src={SmallSize}  alt='small' />
                            <figcaption>Small(10"x10")</figcaption>
                        </figure>
                        <figure> 
                            <input type='image' id='size2' src={MediumSize} alt='medium'/>
                            <figcaption>Medium(17"x7")</figcaption>
                        </figure>
                        <figure> 
                            <input type='image' id='size3' src={LongSize} alt='long'/>
                            <figcaption>Large(24"x7")</figcaption>
                        </figure>
                </div>
                <div className='dropdown'>
                    <h4 className='selections'>Select your size</h4>
                    <select id='fabric-input' name='size' value={this.state.size} placeholder='Size Selection' onChange={this.handleChange}>
                            <option value='' disabled selected hidden>Select a size</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                    </select>
                </div>
                <div className='dropdown'>
                    <h3 id='step1'>Step 3: What act of kindess will you do for someone in exchange for this bag?</h3>
                        <input id='favor-input' type='text' name='favor' value={this.state.favor} onChange={this.handleChange} placeholder='Act of Kindess' />
                </div>
                <div className='dropdown'>
                    <h3 id='step1'>Step 4: Submit Order</h3>
                    <input id='favor-input' type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='Name' />
                    <br></br>
                    <input id='favor-input' type='text' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email' />
                    <br></br>
                    <input id='submitOrder' type='submit'/>
                </div>
                {this.props.isOrder ?
                    <div className='submissionTags'> 
                        <h3 id='submissionMessage'>Your order has been submitted, Judith will be in touch with you shortly!</h3> 
                        <button id='refreshButton' onClick={this.handleSubmission}>Submit another order</button>
                    </div>
                : null}
            </form>
            <Footer />
            </>
        )
    }
}