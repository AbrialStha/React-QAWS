import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <div className="card login-container">
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
                    Or Be Classical
                </p>
                <div className="card-body">
                    <div className="card-content">
                        <div className="align">
                            <i className="material-icons">email</i>
                            <div className="form-group">
                                <label className="bmd-label-floating">
                                    Email address
                                </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
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
                                <input type="password" className="form-control" id="password" />
                                <span className="bmd-help">Enter your password</span>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="footer text-center">
                    <button type="submit" className="btn btn-mycolor btn-simple btn-wd btn-lg">
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default LoginForm