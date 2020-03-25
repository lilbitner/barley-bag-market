import React from 'react'
import Game from '../CrosswordComponents/Game'

export default class Quiz extends React.Component {
    render() {
        return(
            
            <>
                <h1 id='crosswordTitle'>Crossword Puzzle</h1>
                <Game />
            </>
           
        
        )
    }
}