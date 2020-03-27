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
    letter64: '', letterA: 'A', letterB: 'B', letterC: 'C', letterD: 'D', letterE: 'E', letterF: 'F', letterG: 'G',
    letterH: 'H', letterI: 'I', letterJ: 'J', letterK: 'K', letterL: 'L', letterM: 'M', letterN: 'N', letterO: 'O', 
    letterP: 'P', letterQ: 'Q', letterR: 'R', letterS: 'S', letterT: 'T', letterU:'U', letterV: 'V', letterW: 'W', 
    letterX: 'X', letterY: 'Y', letterZ: 'Z'
  }
  tdStyles = {
    backgroundColor: 'black'
   };

   handleChange = (event) => {
    let {name, value} = event.target
    console.log(event.target)
    this.setState({
        [name]: value.toUpperCase()})
 }


  render() {

    const {letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9, letter10,
    letter11, letter12, letter13, letter14, letter15, letter16, letter17, letter18, letter19, letter20, 
    letter21, letter22, letter23, letter24, letter25, letter26, letter27, letter28, letter29, letter30, 
    letter31, letter32, letter33, letter34, letter35, letter36, letter37, letter38, letter39, letter40, 
    letter41, letter42, letter43, letter44, letter45, letter46, letter47, letter48, letter49, letter50, 
    letter51, letter52, letter53, letter54, letter55, letter56, letter57, letter58, letter59, letter60, 
    letter61, letter62, letter63, letter64, letterA, letterB, letterC, letterD, letterE, letterF, letterG,
    letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, 
    letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ} = this.state 
        
    return(
          <>
          <table className="puzzle" width='50%'>
            <tbody> 

            <tr className="row0">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4">
                <input className={letter1 === letterB ? 'inputBlue': null} name='letter1' 
                  value={letter1} placeholder="1" maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell4">
                <input className={letter2 === letterL ? 'inputBlue': null}  name='letter2' type="text" 
                  value={letter2} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter5 === letterP ? 'inputBlue': null}  name='letter5' type="text" 
                  value={letter5} placeholder="2" maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell1">
                <input className={letter17 === letterS ? 'inputBlue': null} name='letter17' type="text" 
                  value={letter17} placeholder="3" maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4">
                <input className={letter3 === letterU ? 'inputBlue': null} name='letter3' type="text" 
                  value={letter3} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter6 === letterE ? 'inputBlue': null} name='letter6' type="text" 
                  value={letter6} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell0">
                <input className={letter24 === letterG ? 'inputBlue': null} name='letter24' type="text" 
                  value={letter24} placeholder="1" maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell1">
                <input className={letter18 === letterA ? 'inputBlue': null} name='letter18' type="text" 
                  value={letter18}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2">
                <input className={letter25 === letterR ? 'inputBlue': null} name='letter25' type="text" 
                  value={letter25}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell3">
                <input className={letter26 === letterD ? 'inputBlue': null} name='letter26' type="text" 
                  value={letter26}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell4">
                <input className={letter4 === letterE ? 'inputBlue': null} name='letter4' type="text" 
                  value={letter4}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell5">
                <input className={letter27 === letterN ? 'inputBlue': null} name='letter27' type="text" 
                  value={letter27}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell6">
                <input className={letter28 === letterI ? 'inputBlue': null} name='letter28' type="text" 
                  value={letter28}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell7">
                <input className={letter7 === letterN ? 'inputBlue': null} name='letter7' type="text" 
                  value={letter7}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8">
                <input className={letter29 === letterG ? 'inputBlue': null} name='letter29' type="text" 
                  value={letter29}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell1">
                <input className={letter19 === letterN ? 'inputBlue': null} name='letter19' type="text" 
                  value={letter19}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter8 === letterN ? 'inputBlue': null} name='letter8' type="text" 
                  value={letter8} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell1">
                <input className={letter20 === letterT ? 'inputBlue': null} name='letter20' type="text" 
                  value={letter20}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter9 === letterS ? 'inputBlue': null} name='letter9' type="text" 
                  value={letter9} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell1">
                <input className={letter21 === letterA ? 'inputBlue': null} name='letter21' type="text" 
                  value={letter21} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter10 === letterY ? 'inputBlue': null} name='letter10' type="text" 
                  value={letter10} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell7">
                <input className={letter11 === letterL ? 'inputBlue': null} name='letter11' type="text" 
                  value={letter11} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12">
                <input className={letter36 === letterR ? 'inputBlue': null} name='letter36'type="text" 
                  value={letter36} placeholder='4' maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>

            <tr className="row8">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1">
                <input className={letter22 === letterF ? 'inputBlue': null} name='letter22' type="text" 
                  value={letter22} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3"style={this.tdStyles}></td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter12 === letterV ? 'inputBlue': null} name='letter12' type="text" 
                  value={letter12} placeholder="2" maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8">
                <input className={letter30 === letterE ? 'inputBlue': null} name='letter30' type="text" 
                  value={letter30} maxLength="1" onChange={this.handleChange} 
                  />
              </td>
              <td className="cell cell9">
                <input className={letter31 === letterR ? 'inputBlue': null} name='letter31' type="text" 
                  value={letter31} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell10">
                <input className={letter32 === letterI ? 'inputBlue': null} name='letter32' type="text" 
                  value={letter32} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell11">
                <input className={letter33 === letterZ ? 'inputBlue': null} name='letter33' type="text" 
                  value={letter33} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell12">
                <input className={letter34 === letterO ? 'inputBlue': null} name='letter34' type="text" 
                  value={letter34} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell13">
                <input className={letter35 === letterN ? 'inputBlue': null} name='letter35' type="text" 
                  value={letter35} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16"style={this.tdStyles}></td>
            </tr>

            <tr className="row9">
              <td className="cell cell0">
                <input className={letter40 === letterS ? 'inputBlue': null} name='letter40' type="text" 
                  value={letter40} placeholder='3' maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell1">
                <input className={letter23 === letterE ? 'inputBlue': null} name='letter23' type="text" 
                  value={letter23} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2">
                <input className={letter41 === letterW ? 'inputBlue': null} name='letter41' type="text" 
                  value={letter41} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell3">
                <input className={letter42 === letterI ? 'inputBlue': null} name='letter42' type="text" 
                  value={letter42} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell4">
                <input className={letter43 === letterN ? 'inputBlue': null} name='letter43' type="text" 
                  value={letter43} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell5">
                <input className={letter44 === letterG ? 'inputBlue': null} name='letter44' type="text" 
                  value={letter44} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter13 === letterA ? 'inputBlue': null} name='letter13' type="text" 
                  value={letter13} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td> 
              <td className="cell cell12">
                <input className={letter37 === letterD ? 'inputBlue': null} name='letter37' type="text" 
                  value={letter37} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell7">
                <input className={letter14 === letterN ? 'inputBlue': null} name='letter14' type="text" 
                  value={letter14} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12">
                <input className={letter38 === letterE ? 'inputBlue': null} name='letter38' type="text" 
                  value={letter38} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16">
                <input className={letter55 === letterT ? 'inputBlue': null} name='letter55' type="text" 
                  value={letter55} placeholder='5' maxLength="1" onChange={this.handleChange} 
                />
              </td>
            </tr>

            <tr className="row11">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3">
                <input className={letter45 === letterR ? 'inputBlue': null} name='letter45' type="text" 
                  value={letter45} placeholder='6' maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell4"style={this.tdStyles}></td>
              <td className="cell cell5"style={this.tdStyles}></td>
              <td className="cell cell6"style={this.tdStyles}></td>
              <td className="cell cell7">
                <input className={letter15 === letterI ? 'inputBlue': null} name='letter15' type="text" 
                  value={letter15} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8"style={this.tdStyles}></td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11">
                <input className={letter50 === letterS ? 'inputBlue': null} name='letter50' type="text" 
                  value={letter50} placeholder='4' maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell12">
                <input className={letter39 === letterO ? 'inputBlue': null} name='letter39' type="text" 
                  value={letter39} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell13">
                <input className={letter51 === letterC ? 'inputBlue': null} name='letter51' type="text" 
                  value={letter51}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell14">
                <input className={letter52 === letterC ? 'inputBlue': null} name='letter52' type="text" 
                  value={letter52}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell15">
                <input className={letter53 === letterE ? 'inputBlue': null} name='letter53' type="text" 
                  value={letter53}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell16">
                <input className={letter54 === letterR ? 'inputBlue': null} name='letter54' type="text" 
                  value={letter54}  maxLength="1" onChange={this.handleChange} 
                />
              </td>
            </tr>

            <tr className="row12">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2">
                <input className={letter58 === letterL ? 'inputBlue': null} name='letter58' type="text" 
                  value={letter58} placeholder="5" maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell3">
                <input className={letter46 === letterI ? 'inputBlue': null} name='letter46' type="text" 
                  value={letter46} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell4">
                <input className={letter59 === letterL ? 'inputBlue': null} name='letter59' type="text" 
                  value={letter59} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell5">
                <input className={letter60 === letterL ? 'inputBlue': null} name='letter60' type="text" 
                  value={letter60} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell6">
                <input className={letter61 === letterI ? 'inputBlue': null} name='letter61' type="text" 
                  value={letter61} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell7">
                <input className={letter16 === letterA ? 'inputBlue': null} name='letter16' type="text" 
                  value={letter16} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell8">
                <input className={letter62 === letterN ? 'inputBlue': null} name='letter62' type="text" 
                  value={letter62} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell9"style={this.tdStyles}></td>
              <td className="cell cell10"style={this.tdStyles}></td>
              <td className="cell cell11"style={this.tdStyles}></td>
              <td className="cell cell12"style={this.tdStyles}></td>
              <td className="cell cell13"style={this.tdStyles}></td>
              <td className="cell cell14"style={this.tdStyles}></td>
              <td className="cell cell15"style={this.tdStyles}></td>
              <td className="cell cell16">
                <input className={letter56 === letterU ? 'inputBlue': null} name='letter56' type="text" 
                  value={letter56} maxLength="1" onChange={this.handleChange} 
                />
              </td>
            </tr>

            <tr className="row13">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3">
                <input className={letter47 === letterL ? 'inputBlue': null} name='letter47' type="text" 
                  value={letter47} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell16">
                <input className={letter57 === letterE ? 'inputBlue': null} name='letter57' type="text" 
                  value={letter57} maxLength="1" onChange={this.handleChange} 
                />
              </td>
            </tr>

            <tr className="row14">
              <td className="cell cell0"style={this.tdStyles}></td>
              <td className="cell cell1"style={this.tdStyles}></td>
              <td className="cell cell2"style={this.tdStyles}></td>
              <td className="cell cell3">
                <input className={letter48 === letterE ? 'inputBlue': null} name='letter48' type="text" 
                  value={letter48} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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
              <td className="cell cell1">
                <input className={letter63 === letterM ? 'inputBlue': null} name='letter63' type="text" 
                  value={letter63} placeholder='6' maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell2">
                <input className={letter64 === letterA ? 'inputBlue': null} name='letter64' type="text" 
                  value={letter64} maxLength="1" onChange={this.handleChange} 
                />
              </td>
              <td className="cell cell3">
                <input className={letter49 === letterY ? 'inputBlue': null} name='letter49' type="text" 
                  value={letter49} maxLength="1" onChange={this.handleChange} 
                />
              </td>
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