import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

const Row = (props) => {
    console.log(this.props.task)
    return (
        <tr>
            <td>{this.props.task.title}</td>
            <td>{this.props.task.title}</td>
            <td>{this.props.task.priority}</td>
            <td>{this.props.task.status}</td>
        </tr>
    )
}

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            tasks: {}
        }

    }

    componentWillMount() {
        axios.get(`${config.baseUrl}/task`).then(res => {
            if (res.data.status === 'success')
                this.setState({ tasks: res.data.tasks, loading: false })
            else
                this.setState({ loading: true })
        })
    }

    render() {
        const tasks = this.state.tasks
        return (
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header card-header-icon">
                            <i className="material-icons">assignment</i>
                        </div>
                        <h4 className="card-title">To Do</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Due Date</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.loading ? <tr><td>Loading...</td></tr> :
                                        tasks.map((task, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{task.title}</td>
                                                    <td>{task.due_date}</td>
                                                    <td>{task.priority}</td>
                                                    <td>{task.status}</td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo