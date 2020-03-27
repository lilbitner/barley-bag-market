import React from 'react' 
import {NavLink} from 'react-router-dom'
import '../../styling/Nav.css'

export default class Nav extends React.Component  {
    
    state = {
        path: {}
    }

    handleMouseIn() {
        this.setState({ hover: true })
      }
      
      handleMouseOut() {
        this.setState({ hover: false })
      }
       
    render() {
        return(
            <nav className = 'nav'>
                <NavLink to='/home' id='welcome'>Judith's Barley Bags</NavLink>
                 <ul className='navMenu'>
                    <li id='navButton'>
                        <NavLink to='/home/aboutBarleyBags' exact onMouseOver={this.handleMouseIn.bind(this)} 
                            onMouseOut={this.handleMouseOut.bind(this)}>Review your Barley Bag
                        </NavLink>
                    </li>
                    <li id='navButton'>
                        <NavLink to='/home/Shop' exact>Shop Barley Bags</NavLink>
                    </li>
                    <li id='navButton'>
                        <NavLink to='/home/Quiz' exact>Get to know Judith</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
} 