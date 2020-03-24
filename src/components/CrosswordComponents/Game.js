import React from 'react'
import Puzzle from './Puzzle'
import Clues from './Clues'

export default class Game extends React.Component{
    
    state = {
        data: [
          {
            answer: 'Blue', 
            clue: "1. Judith's favortite color",
          }, 
          {
            answer: 'Pennsylvania', 
            clue: '2. Judith lived in what East Coast stte for 8 years?'
          }, 
          {
            answer: 'Santa Fe', 
            clue: "3. Judith's hometown",
          }, 
          {
            answer: 'Gardening', 
            clue: "1. Judith's favorite outdoor activity",
          }, 
          {
            answer: 'Rodeo', 
            clue: "4. Judith was the _____ princess in Santa Fe",
          }, 
          {
            answer: 'Verizon', 
            clue: "2. Judith's worked here for 30 years",
          }, 
          {
            answer: 'Sewing', 
            clue: "3. Judith has a room in her basement dedicated to this activity",
          }, 
          {
            answer: 'True', 
            clue: "5. True or Nill - Judy is good at baking?",
          }, 
          {
            answer: 'Riley', 
            clue: "6. Judith's dog's name",
          }, 
          {
            answer: 'Soccer', 
            clue: "4. Judith's favorite sport to watch",
          }, 
          {
            answer: 'Lillian', 
            clue: "5. Judith's daughter's name",
          }, 
          {
            answer: 'May', 
            clue: "6. Judith's birth month",
          }, 
    
        ]
    }
    
    
    
    render(){
        return(
            <div className="row">
                <div className="col-md-8">
            <h3>Crossword</h3>
            <Puzzle />
            </div>
            <div className="col-md-4">
                <h2>Clues</h2>
                <Clues data={this.state.data} />
            </div>
            </div>
        )
    }
}