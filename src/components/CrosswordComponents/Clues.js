import React from 'react'

export default class Clues extends React.Component {
    render() {
    const statements = this.props.data.map(function(clues) {
        return (
            <Output clue={clues.clue}></Output>
        );
    });
        return(
            <div className="clueList">
                {statements}
            </div>
        )
    }
}