import React from 'react'
import Careers from './Careers'
import Email from './Email'
import {NavLink} from 'react-router-dom'


export default function Footer() {

    return(
        <div className='footer'>
            <NavLink to='/Email' exact>Contact Us</NavLink>
            <h5>JudyBitner Copyright 2020</h5> 
            <NavLink to='/Careers' exact>Careers</NavLink>
        </div>
        
    )
}