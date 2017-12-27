import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { loginRequest } from '../../actions/AuthActions'

class Login extends Component {
    render() {
        return (
            <div className="container-fluid login">
                <div className="card login-container">
                    <LoginForm loginRequest={this.props.loginRequest} />
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginRequest: PropTypes.func.isRequired
}

export default connect(null, { loginRequest })(Login)