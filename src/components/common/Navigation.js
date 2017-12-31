import React, { Component } from 'react'
import pic from '../../Assets/profile_pic.png'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter, Link } from "react-router-dom"
import { logoutRequest } from '../../actions/AuthActions'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.logoutRequest = this.logoutRequest.bind(this)
        this.isActive = this.isActive.bind(this)
    }

    logoutRequest = (event) => {
        event.preventDefault()
        this.props.logoutRequest()
    }

    isActive = (path) => {
        if (this.props.location.pathname === path)
            return "active"
    }

    render() {
        console.log(this.props.location)
        return (
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/profile" className={this.isActive("/profile")}>
                            <img src={pic} alt="profile_pic" className="rounded-circle pro_img" />
                            <span className="nav-text">
                                Profile
                                </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/board" className={this.isActive("/board")}>
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="has-subnav">
                        <Link to="/task_in_hand" className={this.isActive("/task_in_hand")}>
                            <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">
                                Tasks in hand
                            </span>
                        </Link>

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
                        <Link to="/create" className={this.isActive("/create")}>
                            <i className="fa fa-plus fa-2x"></i>
                            <span className="nav-text">
                                Create task
                            </span>
                        </Link>
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

export default withRouter(connect(null, { logoutRequest })(Navigation))