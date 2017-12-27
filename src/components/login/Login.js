import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { loginRequest } from '../../actions/AuthActions'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated)
            this.props.history.push('/delete')
    }
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
    loginRequest: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps, { loginRequest })(Login))