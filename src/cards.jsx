import { useState } from 'react'
function Card(props)
{
    return <div>
        <img src={props.avatar} alt="" />
        <h2>{props.articleName}</h2>
        <p>{props.role}</p>
        <h3>{props.name}</h3>
    </div>
}

export default Card