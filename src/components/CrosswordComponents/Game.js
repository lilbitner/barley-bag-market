import React from 'react'
import Puzzle from './Puzzle'
import Clues from './Clues'

export default class Game extends React.Component{
    
    state = {
        value: '',
        data: [
          {
            answer: 'Blue', 
            clue: "1 Down. Judith's favortite color",
          }, 
          {
            answer: 'Pennsylvania', 
            clue: '2 Down. Judith lived in what East Coast stte for 8 years?'
          }, 
          {
            answer: 'Santa Fe', 
            clue: "3 Down. Judith's hometown",
          }, 
          {
            answer: 'Gardening', 
            clue: "1 Across. Judith's favorite outdoor activity",
          }, 
          {
            answer: 'Rodeo', 
            clue: "4 Down. Judith was the _____ princess in Santa Fe",
          }, 
          {
            answer: 'Verizon', 
            clue: "2 Across. Judith's worked here for 30 years",
          }, 
          {
            answer: 'Sewing', 
            clue: "3 Across. Judith has a room in her basement dedicated to this activity",
          }, 
          {
            answer: 'True', 
            clue: "5 Down. True or Nill - Judy is good at baking?",
          }, 
          {
            answer: 'Riley', 
            clue: "6 Down. Judith's dog's name",
          }, 
          {
            answer: 'Soccer', 
            clue: "4 Across. Judith's favorite sport to watch",
          }, 
          {
            answer: 'Lillian', 
            clue: "5 Across. Judith's daughter's name",
          }, 
          {
            answer: 'May', 
            clue: "6 Across. Judith's birth month",
          }, 
    
        ]
    }
    
    handleChange = (e) => {
        this.setState({value: e.target.value})
     }
    
    
    render(){
        return(
            <div className="game">
                    <Puzzle handleChange={this.handleChange} />
                    <Clues data={this.state.data} />
            </div> 
        )
    }
}