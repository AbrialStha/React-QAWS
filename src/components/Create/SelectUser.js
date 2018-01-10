import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class SelectUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            users: {}
        }
    }

    componentWillMount() {
        axios.get(`${config.baseUrl}/users/`).then(res => {
            if (res) {
                if (res.data.status == "success")
                    this.setState({ isLoading: false, users: res.data.users })
            }
        })
    }

    renderListUser = () => {
        return this.state.users.map((user) => {
            return <option value={user._id}>{user.name}</option>
        })
    }
    render() {
        return (
            <div className="form-group bmd-form-group is-filled">
                <label htmlFor="task_assginee" className="bmd-label-floating">Asiginee</label>
                <select className="form-control" id="task_asigine">
                    {
                        this.state.isLoading ? <option disabled="true">Loading...</option> :
                            this.renderListUser()
                    }
                </select>
            </div>
        )
    }
}

export default SelectUser