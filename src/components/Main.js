import React from 'react'
import Nav from './NavigationPages/Nav'
import Body from './Body'
import AboutJudy from './AboutJudy'
import Footer from './FooterPages/Footer'
import Cart from './NavigationPages/Cart'
import Shop from './NavigationPages/Shop'
import Quiz from './NavigationPages/Quiz'
import AboutBarleyBags from './NavigationPages/AboutBB'
import {BrowserRouter as  Route, Switch, NavLink} from 'react-router-dom'


export default class Main extends React.Component {

    render() {
    
        return(
          
            
            
            <>
            {/* <Nav/>  */}
            <Body />    
            {/* <Footer /> */}
            </>
            
        )
    }
}