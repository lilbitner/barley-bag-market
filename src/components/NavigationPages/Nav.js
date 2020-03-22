import React from 'react' 
import {NavLink} from 'react-router-dom'

export default class Nav extends React.Component  {
    
    handleMouseIn() {
        this.setState({ hover: true })
      }
      
      handleMouseOut() {
        this.setState({ hover: false })
      }

       
    render() {
        if(window.location.pathname == '/home' || '/home/Shop' || '/home/aboutBarleyBags' || '/home/Quiz' || 'home/Contact' || 'home/Careers' ) 
        return(
            <nav className = 'nav'>
                <NavLink to='/home' id='welcome'>Judith's Barley Bags</NavLink>
                 <ul className='navMenu'>
                    <li id='navButton'>
                        <NavLink to='/home/aboutBarleyBags' exact onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>Barley Bag Testimonials</NavLink>
                    </li>
                    <li id='navButton'>
                        <NavLink to='/home/Shop' exact>Shop Barley Bags</NavLink>
                    </li>
                    <li id='navButton'>
                        <NavLink to='/home/Quiz' exact>Find your perfect Barley Bag Quiz</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
} 