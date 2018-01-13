import React, { Component } from 'react'
import Navigation from './common/Navigation'
import Toaster from './toaster/toaster'

class Main extends Component {
    render() {
        return (
            <div>
                <div className="area">
                <Toaster />
                    {this.props.children}
                </div>
                <Navigation />
            </div>
        )
    }
}

export default Main