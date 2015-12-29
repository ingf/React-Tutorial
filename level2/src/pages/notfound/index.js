import React from 'react'
import { Link } from 'react-router-component'

export default class NotFound extends React.Component{
    render() {
        return (
            <div>
                <h2> 404 </h2>
                <Link href="/"> click me to back hone </Link> 
            </div>
        )
    }
}
