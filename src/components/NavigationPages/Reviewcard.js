import React from 'react'

export default class Card extends React.Component {
    

    render() {
        return(
            <div className='reviewCard'>
                <h3>{this.props.review.description}</h3>
                <h3>{this.props.review.star}</h3>
                {/* <img>{this.props.image}</img> */}
            </div>
        )
    }
}