import React, { Component } from 'react'
import Navigation from './common/Navigation'
import Toaster from './toaster/toaster'
import axios from 'axios'
import Link from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
        this.redirectToLogin = this.redirectToLogin.bind(this)
    }

    componentWillMount() {
        // Add a 401 response interceptor
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (401 === error.response.status) {
                    localStorage.removeItem('Authorization')
                    localStorage.removeItem('user')
                    this.setState({ error: true })
                } else {
                    return Promise.reject(error);
                }
            }
        )
    }
    redirectToLogin = () => {
        window.location = '/'
    }

    render() {
        const opensnackbar = this.state.error ? "snackbar-opened" : ""
        return (
            <div>
                <div id="snackbar-container">
                    <div class={`snackbar ${opensnackbar}`}>
                        <span class="snackbar-content">
                            Session Time Out !
                            <a href="" onClick={this.redirectToLogin} class="btn btn-info">Click here to login</a>
                        </span>
                    </div>
                </div>
                <div className="area">
                    <Toaster />
                    {this.props.children}
                </div>
                <Navigation />
            </div>
        )
    }
}

export default Main