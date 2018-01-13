import React, { Component } from 'react'
import Navigation from './common/Navigation'
import Toaster from './toaster/toaster'
import axios from 'axios'

class Main extends Component {
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
                    window.location = '/login'
                } else {
                    return Promise.reject(error);
                }
            }
        )
    }

    render() {
        return (
            <div>
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