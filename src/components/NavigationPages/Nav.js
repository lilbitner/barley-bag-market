import React from 'react' 
import AboutJudy from '../AboutJudy'
import {NavLink} from 'react-router-dom'
import Email from '../FooterPages/Email'

export default class Nav extends React.Component {
    
    
    render() {
        return(
            <nav className = 'nav'>
                <h1 id='welcome'>Welcome to Judith's Barley Bags!</h1>
                 <ul className='navMenu'>
                    <li>
                        <NavLink to='/home/aboutBarleyBags' exact>About Barley Bags</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/Shop' exact>Shop Barley Bags</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/Quiz' exact>Find your perfect Barley Bag Quiz</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/Cart' exact>Cart</NavLink>
                    </li>
                </ul>
                {/* <Route exact path='/aboutJudy' component={AboutJudy} />
                <Route exact path='/email' component={Email} /> */}
            </nav>

        )
    }
}