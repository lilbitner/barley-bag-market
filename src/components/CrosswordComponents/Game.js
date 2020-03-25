import React from 'react'
import Puzzle from './Puzzle'
import Clues from './Clues'

export default class Game extends React.Component{
    
    state = {
    letter1:'', letter2: '', letter3: '', letter4: '', letter5: '', letter6: '', letter7: '',
    letter8: '', letter9: '', letter10: '', letter11: '', letter12: '', letter13: '', letter14: '', letter15:'',
    letter16: '', letter17: '', letter18: '', letter19: '', letter20: '', letter21: '', letter22: '', letter23: '',
    letter24: '', letter25: '', letter26: '', letter27: '', letter28: '', letter29: '', letter30: '', letter31: '',
    letter32: '', letter33: '', letter34: '', letter35: '', letter36: '', letter37: '', letter38: '', letter39: '',
    letter40: '', letter41: '', letter42: '', letter43: '', letter44: '', letter45: '', letter46: '', letter47: '',
    letter48: '', letter49: '', letter50: '', letter51: '', letter52: '', letter53: '', letter54: '', letter55: '',
    letter56: '', letter57: '', letter58: '', letter59: '', letter60: '', letter61: '', letter62: '', letter63: '',
    letter64: '', 
        data: [
          {
            answer: 'Blue', 
            clue: "(1 Down) Judith's favortite color.",
          }, 
          {
            answer: 'Pennsylvania', 
            clue: '(2 Down) Judith lived in what East Coast state for 8 years?'
          }, 
          {
            answer: 'Santa Fe', 
            clue: "(3 Down) Judith's hometown.",
          }, 
          {
            answer: 'Rodeo', 
            clue: "(4 Down) Judith was the _____ princess in Santa Fe.",
          },
          {
            answer: 'True', 
            clue: "(5 Down) True or Nill - Judy is good at baking?",
          }, 
          {
            answer: 'Riley', 
            clue: "(6 Down) Judith's dog's name.",
          }, 
          {
            answer: 'Gardening', 
            clue: "(1 Across) Judith's favorite outdoor activity.",
          }, 
          {
            answer: 'Verizon', 
            clue: "(2 Across) Judith worked here for 30 years.",
          }, 
          {
            answer: 'Sewing', 
            clue: "(3 Across) Judith has a room in her basement dedicated to this activity.",
          },  
          {
            answer: 'Soccer', 
            clue: "(4 Across) Judith's favorite sport to watch.",
          }, 
          {
            answer: 'Lillian', 
            clue: "(5 Across) Judith's daughter's name.",
          }, 
          {
            answer: 'May', 
            clue: "(6 Across) Judith's birth month.",
          }, 
    
        ]
    }
    



    
    render(){
        return(
            <div className="game">
                    <Puzzle values={this.state.values} />
                    <Clues data={this.state.data} />
            </div> 
        )
    }
}