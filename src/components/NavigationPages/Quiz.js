import React from 'react'
import Game from '../CrosswordComponents/Game'

export default class Quiz extends React.Component {
    render() {
        return(
            
            <>
                <h1 id='crosswordTitle'>Get to know Judith!</h1>
                <Game />
            </>
           
        
        )
    }
}