import React from 'react'
import Game from '../CrosswordComponents/Game'
import Nav from './Nav'
import Footer from '../FooterPages/Footer'
import '../../styling/Crossword.css'

export default class Quiz extends React.Component {
    render() {
        return(
            
            <>
                <Nav /> 
                <h1 id='crosswordTitle'>Get to know Judith!</h1>
                <Game />
                <Footer />
            </>
           
        )
    }
}