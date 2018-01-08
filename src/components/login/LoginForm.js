import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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
        this.props.loginRequest(this.state).then(
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
                    {this.state.error===''? 'Or Be Classical' : ''}
                    <span className="text-danger">{this.state.error}</span>
                </p>
                <div className="card-body">
                    <div className="card-content">
                        <div className="align">
                            <i className="material-icons">email</i>
                            <div className="form-group">
                                <label className="bmd-label-floating">
                                    Email address
                                </label>
                                <input
                                    value={username}
                                    onChange={this.onChange}
                                    type="email"
                                    className="form-control"
                                    name="username"
                                    required
                                />
                                <span className="bmd-help">Enter your fusemachines account</span>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="align">
                            <i className="material-icons">lock</i>
                            <div className="form-group">
                                <label className="bmd-label-floating">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={this.onChange}
                                    type="password"
                                    className="form-control"
                                    name="password"
                                />
                                <span className="bmd-help">Enter your password</span>
                            </div>
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