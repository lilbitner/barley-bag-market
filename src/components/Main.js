import React from 'react'
import Body from './Body'



export default class Main extends React.Component {

    
    state={
        path: {}
    }
    reRender() {
        this.setState({path: window.location.pathname})
     } 
     render() {
    return(
        <>
            {/* {this.reRender} */}
            <Body />  
            </>  
    )
     }
    
}