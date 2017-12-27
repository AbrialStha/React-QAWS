import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
    render() {
        return (
            <div className="container-fluid login">
                <div className="card login-container">
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default Login