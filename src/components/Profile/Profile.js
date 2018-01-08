import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import config from '../../config'
import pic from '../../Assets/profile_pic.png'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            Info: {}
        }
    }

    componentWillMount() {
        axios.get(`${config.baseUrl}/users/${this.props.user}`).then(res => {
            if (res.data.status === 'success')
                this.setState({ Info: res.data.user, loading: false })
            else
                this.setState({ loading: true })
        })
    }

    render() {
        const { _id, name, email, supervise, admin } = this.state.Info
        const isSupervise = <b>Supervise Access</b>
        const isAdmin = <b>Admin Access</b>
        return (
            <div className="card profile_card">
                <div className="card-body">
                    <div className="card-header">
                        <img src={pic} alt="profile_pic" className="rounded-circle profile_pic" />
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">{name}</h4>
                        <div className="container profile_info">
                            <b>Id :</b>{_id}<br/>
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

Profile.propTypes = {
    user: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(Profile)