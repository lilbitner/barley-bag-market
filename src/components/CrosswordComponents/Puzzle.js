import React from 'react'

export default class Puzzle extends React.Component {


  state= {
    letter1:'', letter2: '', letter3: '', letter4: '', letter5: '', letter6: '', letter7: '',
    letter8: '', letter9: '', letter10: '', letter11: '', letter12: '', letter13: '', letter14: '', letter15:'',
    letter16: '', letter17: '', letter18: '', letter19: '', letter20: '', letter21: '', letter22: '', letter23: '',
    letter24: '', letter25: '', letter26: '', letter27: '', letter28: '', letter29: '', letter30: '', letter31: '',
    letter32: '', letter33: '', letter34: '', letter35: '', letter36: '', letter37: '', letter38: '', letter39: '',
    letter40: '', letter41: '', letter42: '', letter43: '', letter44: '', letter45: '', letter46: '', letter47: '',
    letter48: '', letter49: '', letter50: '', letter51: '', letter52: '', letter53: '', letter54: '', letter55: '',
    letter56: '', letter57: '', letter58: '', letter59: '', letter60: '', letter61: '', letter62: '', letter63: '',
    letter64: ''
  }
  tdStyles = {
    backgroundColor: 'black'
   };

   handleChange = (event) => {
    let {name, value} = event.target
    console.log(event.target)
    this.setState({
        [name]: value})
 }


  
  render() {
        return(
          <>
          <table className="puzzle" width='50%'>
            <tbody> 
            <tr className="row0">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"><input name='letter1' value={this.state.letter1} placeholder="1" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"style={this.tdStyles}></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row1">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"><input name='letter2' type="text" value={this.state.letter2} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter5' type="text" value={this.state.letter5} placeholder="2" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
              </tr>
            <tr className="row2">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"><input name='letter17' type="text" value={this.state.letter17} placeholder="3" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"><input name='letter3' type="text" value={this.state.letter3} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter6' type="text" value={this.state.letter6} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row3">
              <td className="cell cell0"><input name='letter24' type="text" value={this.state.letter24} placeholder="1" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell1"><input name='letter18' type="text" value={this.state.letter18}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"><input name='letter25' type="text" value={this.state.letter25}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell3"><input name='letter26' type="text" value={this.state.letter26}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"><input name='letter4' type="text" value={this.state.letter4}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5"><input name='letter27' type="text" value={this.state.letter27}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell6"><input name='letter28' type="text" value={this.state.letter28}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell7"><input name='letter7' type="text" value={this.state.letter7}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"><input name='letter29' type="text" value={this.state.letter29}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row4">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"><input name='letter19' type="text" value={this.state.letter19}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter8' type="text" value={this.state.letter8} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row5">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"><input name='letter20' type="text" value={this.state.letter20}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter9' type="text" value={this.state.letter9} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row6">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"><input name='letter21' type="text" value={this.state.letter21} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter10' type="text" value={this.state.letter10} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row7">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter11' type="text" value={this.state.letter11} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"><input name='letter36'type="text" value={this.state.letter36} placeholder='4' maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row8">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"><input name='letter22' type="text" value={this.state.letter22} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter12' type="text" value={this.state.letter12} placeholder="2" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"><input name='letter30' type="text" value={this.state.letter30} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell9"><input name='letter31' type="text" value={this.state.letter31} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell10"><input name='letter32' type="text" value={this.state.letter32} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell11"><input name='letter33' type="text" value={this.state.letter33} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell12"><input name='letter34' type="text" value={this.state.letter34} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell13"><input name='letter35' type="text" value={this.state.letter35} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row9">
              <td className="cell cell0"><input name='letter40' type="text" value={this.state.letter40} placeholder='3' maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell1"><input name='letter23' type="text" value={this.state.letter23} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"><input name='letter41' type="text" value={this.state.letter41} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell3"><input name='letter42' type="text" value={this.state.letter42} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"><input name='letter43' type="text" value={this.state.letter43} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5"><input name='letter44' type="text" value={this.state.letter44} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter13' type="text" value={this.state.letter13} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td> 
              <td className="cell cell12"><input name='letter37' type="text" value={this.state.letter37} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row10">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter14' type="text" value={this.state.letter14} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"><input name='letter38' type="text" value={this.state.letter38} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"><input name='letter55' type="text" value={this.state.letter55} placeholder='5' maxLength="1" onChange={this.handleChange} /></td>
            </tr>
            <tr className="row11">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"><input name='letter45' type="text" value={this.state.letter45} placeholder='6' maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"><input name='letter15' type="text" value={this.state.letter15} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"><input name='letter50' type="text" value={this.state.letter50} placeholder='4' maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell12"><input name='letter39' type="text" value={this.state.letter39} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell13"><input name='letter51' type="text" value={this.state.letter51}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell14"><input name='letter52' type="text" value={this.state.letter52}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell15"><input name='letter53' type="text" value={this.state.letter53}  maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell16"><input name='letter54' type="text" value={this.state.letter54}  maxLength="1" onChange={this.handleChange} /></td>
            </tr>
            <tr className="row12">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"><input name='letter58' type="text" value={this.state.letter58} placeholder="5" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell3"><input name='letter46' type="text" value={this.state.letter46} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"><input name='letter59' type="text" value={this.state.letter59} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5"><input name='letter60' type="text" value={this.state.letter60} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell6"><input name='letter61' type="text" value={this.state.letter61} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell7"><input name='letter16' type="text" rvalue={this.state.letter16} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell8"><input name='letter62' type="text" value={this.state.letter62} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"><input name='letter56' type="text" value={this.state.letter56} maxLength="1" onChange={this.handleChange} /></td>
            </tr>
            <tr className="row13">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"><input name='letter47' type="text" value={this.state.letter47} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"style={this.tdStyles}></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"><input name='letter57' type="text" value={this.state.letter57} maxLength="1" onChange={this.handleChange} /></td>
            </tr>
            <tr className="row14">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"><input name='letter48' type="text" value={this.state.letter48} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"style={this.tdStyles}></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            <tr className="row15">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"><input name='letter63' type="text" value={this.state.letter63} placeholder='6' maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell2"><input name='letter64' type="text" value={this.state.letter64} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell3"><input name='letter49' type="text" value={this.state.letter49} maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7"style={this.tdStyles}></td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>
            </tbody> 
          </table>
          </>
        )
    }
  }