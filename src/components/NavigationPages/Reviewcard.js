import React from 'react'

export default function Card(props)  {
    
        return(
            <div className='reviewCard'>
                <h3>{props.review.description}</h3>
                <h3>{props.review.title}</h3>
            </div>
        )
}