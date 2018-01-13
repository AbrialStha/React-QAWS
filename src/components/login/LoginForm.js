import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Textfield from '../common/Textfield'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            error: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ isLoading: true })

        var properties = Object.getOwnPropertyNames(this.state)
        let loginData = {}
        properties.forEach(property => {
            if (property !== 'isLoading' && property !== 'error')
                loginData[property] = this.state[property]
        })

        this.props.loginRequest(loginData).then(
            (res) => {
                this.props.history.push('/board')
            },
            (err) => {
                let data
                try {
                    data = err.response.data
                    this.setState({ error: data.msg })
                } catch (error) {
                    console.log(error)
                }
                this.setState({ isLoading: false })
            }
        )
    }

    render() {
        const { username, password, isLoading } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div className="card-header text-center">
                    <h4 className="card-title">Login</h4>
                    <div className="social-line">
                        <a href="" className="btn btn-just-icon btn-simple">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="" className="btn btn-just-icon btn-simple">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="" className="btn btn-just-icon btn-simple">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </div>
                </div>
                <p className="category text-center">
                    {this.state.error === '' ? 'Or Be Classical' : ''}
                    <span className="text-danger">{this.state.error}</span>
                </p>
                <div className="card-body">
                    <div className="card-content">
                        <div className="align">
                            <i className="material-icons">email</i>
                            <Textfield
                                value={username}
                                onChange={this.onChange}
                                id="username"
                                name="username"
                                type="email"
                                label='Email address'
                                helpText='Enter your fusemachines account'
                                required="true"
                            />
                            <div className="clear"></div>
                        </div>
                        <div className="align">
                            <i className="material-icons">lock</i>
                            <Textfield
                                value={password}
                                onChange={this.onChange}
                                id="password"
                                name="password"
                                type="password"
                                label='Password'
                                helpText='Enter your password'
                                required="true"
                            />
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="footer text-center">
                    <button
                        type="submit"
                        className="btn btn-mycolor btn-simple btn-wd btn-lg"
                        disabled={isLoading}>
                        {!isLoading ? 'LogIn' : 'Processing...'}
                    </button>
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    loginRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(LoginForm)