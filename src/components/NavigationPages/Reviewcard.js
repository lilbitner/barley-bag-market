import React from 'react'

export default function Card(props)  {
    
        return(
            <div className='reviewCard'>
                <h3>{this.props.review.description}</h3>
                <h3>{this.props.review.title}</h3>
            </div>
        )
}