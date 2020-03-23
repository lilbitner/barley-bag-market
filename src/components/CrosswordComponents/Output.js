import React from 'react'

export default class Output extends React.Component {
    render() {
        return(
            <div className="clues">
                <p>{this.props.clue}</p>
            </div>   
        )
    }
}