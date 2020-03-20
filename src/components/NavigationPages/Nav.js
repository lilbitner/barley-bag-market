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
        return(
            <nav className = 'nav'>
                <NavLink to='/home' id='welcome'>Judith's Barley Bags</NavLink>
                 <ul className='navMenu'>
                    <li>
                        <NavLink to='/home/aboutBarleyBags' exact onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>About Barley Bags</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/Shop' exact>Shop Barley Bags</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/Quiz' exact>Find your perfect Barley Bag Quiz</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
} 