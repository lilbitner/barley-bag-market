import React from 'react'
import HomeLogo from './HomeLogo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router'

export default class Main extends React.Component {
        
    
    // state = {
    //     visible: true 
    // }
    
    // handleClick = () => {
    //     this.setState({
    //         visible: false
    //     })
    //     this.showMain()
    // }
    
    render(){
        return(
        
        
        <div className= 'body'>
            <HomeLogo/> 
            {/* <Redirect to='/' /> */}
            {/* handleClick={this.handleClick} visible={this.state.visible} */}
        </div>
        
        
        )
    }
}