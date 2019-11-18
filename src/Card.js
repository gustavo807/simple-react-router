import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

export default function Card({title, body, id}){
    let match = useRouteMatch()
    return (
        <div>
            <h4>
                <Link to={`${match.url}/${id}`}>{title}</Link>
            </h4>
            <p>{body}</p>
        </div>
    )
}