import React from 'react'
import Game from '../CrosswordComponents/Game'

export default class Quiz extends React.Component {
    render() {
        return(
            
            <>
            <div className="titleContainer">
                    <h1>Crossword Puzzle</h1>
            </div>
            <div className="gameContainer">
                <div id="game" > 
                <Game /> 
                </div>
            </div>
            </>
           
        
        )
    }
}