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
                if (res.data.status === "success")
                    this.setState({ isLoading: false, users: res.data.users })
            }
        })
    }

    renderListUser = () => {
        const firstopt = {
            display: 'none'
        }
        var options = [
            <option style={firstopt} key="Unassigned"></option>
        ].concat(
            this.state.users.map((user, index) => <option value={user._id} key={index}>{user.name}</option>)
            )
        return options
    }

    render() {
        const isFocused = this.state.focused ? "is-focused" : ""
        const isFilled = this.props.value ? "is-filled" : ""
        const class_name = `form-group bmd-form-group ${isFocused} ${isFilled}`
        return (
            <div className={class_name}>
                <label htmlFor="task_assginee" className="bmd-label-floating">Asiginee</label>
                <select className="form-control" name={this.props.name} id="task_asigine"
                    value={this.props.value} onChange={this.props.onChange} required>
                    {
                        this.state.isLoading ? <option disabled="true" defaultValue="">Loading...</option> :
                            this.renderListUser()
                    }
                </select>
            </div>
        )
    }
}

export default SelectUser