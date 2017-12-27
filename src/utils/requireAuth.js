import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export default function (ComposedCompoent) {

    class Authenticate extends Component {

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                console.log('Not Authenticated')
                this.props.history.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.isAuthenticated)
                this.props.history.push('/')
        }

        render() {
            return (
                <ComposedCompoent {... this.props} />
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }
    return withRouter(connect(mapStateToProps)(Authenticate))
}