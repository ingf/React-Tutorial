import React from 'react'
import ReactDom from 'react-dom'

import {  NotFound, Locations, Location } from 'react-router-component'

/* react-proxy, use require.ensure([], (require) -> {
 *      require('some module you want to load async');
 * })
 * 
 * webpack async thunk doc: http://webpack.github.io/docs/code-splitting.html
 *  
 * react-proxy-loader: https://github.com/webpack/react-proxy-loader
 */

// make sure home was page sync loaded TODO:// will fixed the bug later
import Home from './home'
import About from 'react-proxy!./about'
import List from 'react-proxy!./list'
import Details from 'react-proxy!./details'
import NotFoundPage from 'react-proxy!./notfound'

// import base style
import styles from 'scss/reset'

// route wrapper
class App extends React.Component {
    render() {
        return (
            <Locations hash>
                <Location path="/" handler={Home}/>
                <Location path="/about" handler={About}/>
                <Location path="/details" handler={Details}/>
                <Location path="/list(/*)" handler={List}/>
                <NotFound handler={NotFoundPage}/>
            </Locations>
        )
    }
}

// render the dom 
ReactDom.render(<App/>, document.getElementById('app'))
