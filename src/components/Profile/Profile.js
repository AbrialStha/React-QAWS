import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import pic from '../../Assets/profile_pic.png'


class Profile extends Component {
    render() {
        const { _id, name, email, supervise, admin } = this.props.user
        const isSupervise = <b>Supervise Access</b>
        const isAdmin = <b>Admin Access</b>
        return (
            <div className="card profile_card">
                <div className="card-body">
                    <div className="card-header">
                        <img src={pic} className="rounded-circle profile_pic" />
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">{name}</h4>
                        <div className="container profile_info">
                            <b>Email :</b> {email}<br />
                            {supervise ? isSupervise : ""}<br />
                            {admin ? isAdmin : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(Profile)