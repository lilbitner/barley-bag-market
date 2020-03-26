import React from 'react'
import Output from './Output'

export default class Clues extends React.Component {
    
    statements = this.props.data.map(clues => {
        return (
            <Output clue={clues.clue} key={clues.clue.id} ></Output>
        );
    });
    
    
    render() {
    
        return(
            <div className="clueList">
                <h2>Clues</h2>
                {this.statements}
            </div>
        )
    }
}