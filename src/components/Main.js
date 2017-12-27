import React, { Component } from 'react'
import Navigation from './common/Navigation'

class Main extends Component {
    render() {
        return (
            <div>
                <div className="area">
                    {this.props.children}
                </div>
                <Navigation />
            </div>
        )
    }
}

export default Main