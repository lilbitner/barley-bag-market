import React from 'react'
import {Redirect} from 'react-router'

export default class HomeLogo extends React.Component {
    
    
    // state = {
    //     visible: false 
    // }
   
   handleClick = () => {
        // this.setState({
        //     visible: true
        // })
        return <Redirect to='/' />
    }
   
    render() {

        return(
            <button onClick={this.handleClick} type='button' className= 'home-logo'>
                <h1>Bitner Barley Bags</h1>
                <p>Welcome, click to enter</p>
                {/* <Redirect to='/' /> */}
            </button>
       )
    //    this.state.visible === true?'fadeOut': 'home-logo'
    }
}
