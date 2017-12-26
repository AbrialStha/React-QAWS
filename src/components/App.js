import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './common/Navigation'
import Main from './Main'

const isLogedin = true
const App = () => {
    const navigation = <Navigation />
    return (
        <BrowserRouter>
            <div className="container-fluid login">
                {isLogedin ? navigation:''}
                <Main />
            </div>
        </BrowserRouter >
    )
}

export default App