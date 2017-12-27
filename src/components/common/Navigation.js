import React, { Component } from 'react'
import pic from '../../Assets/profile_pic.png'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutRequest } from '../../actions/AuthActions'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.logoutRequest = this.logoutRequest.bind(this)
    }

    logoutRequest = (event) => {
        event.preventDefault()
        this.props.logoutRequest()
    }

    render() {
        return (
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="">
                            <img src={pic} alt="profile_pic" className="rounded-circle pro_img" />
                            <span className="nav-text">
                                Profile
                                </span>
                        </a>
                    </li>
                    <li>
                        <a href="./index.html">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="./run.html">
                            <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">
                                Tasks in hand
                    </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <a href="">
                            <i className="fa fa-eye fa-2x"></i>
                            <span className="nav-text">
                                Assigned By ME
                    </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="./create.html">
                            <i className="fa fa-plus fa-2x"></i>
                            <span className="nav-text">
                                Create task
                    </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="">
                            <i className="fa fa-folder-open fa-2x"></i>
                            <span className="nav-text">
                                Resolved Task
                    </span>
                        </a>

                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-bar-chart-o fa-2x"></i>
                            <span className="nav-text">
                                Graphs and Statistics
                    </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-info fa-2x"></i>
                            <span className="nav-text">
                                Documentation
                    </span>
                        </a>
                    </li>
                </ul>

                <ul className="logout">
                    <li>
                        <a href="">
                            <i className="fa fa-bell fa-2x"></i>
                            <span className="nav-text">
                                Notification
                    </span>
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={this.logoutRequest}>
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

Navigation.propTypes = {
    logoutRequest: PropTypes.func.isRequired
}

export default connect(null, { logoutRequest })(Navigation)