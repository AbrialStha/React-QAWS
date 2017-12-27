import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
    render() {
        return(
            <div className="container-fluid login">
                <LoginForm/>
            </div>
        )
    }
}

export default Login