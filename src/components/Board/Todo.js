import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import config from '../../config'

const Row = (props) => {
    function formatDate(date) {
        const d = new Date(date)
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = d.getDate();
        var monthIndex = d.getMonth();
        var year = d.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    console.log(props.task)
    const { title, due_date, priority, status } = props.task
    return (
        <tr>
            <td>{title}</td>
            <td>{formatDate(due_date)}</td>
            <td>{priority}</td>
            <td>
                {
                    status != null ? status :
                        <button className="btn  btn-raised btn-success">Start</button>
                }
            </td>
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
        axios.get(`${config.baseUrl}/tasks/todo/${this.props.userId}`).then(res => {
            if (res.data.status === 'success')
                this.setState({ tasks: res.data.todos, loading: false })
            else
                this.setState({ loading: true })
        })
    }

    render() {
        return (
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header card-header-icon">
                            <i className="material-icons">assignment</i>
                        </div>
                        <h4 className="card-title">To Do</h4>
                        {
                            this.state.loading ? <div className="loader"></div> :
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
                                            this.state.tasks.map((task) => <Row task={task} key={task._id} />)
                                        }
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Todo.propTypes = {
    userId: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    return {
        userId: state.auth.user
    }
}
export default connect(mapStateToProps)(Todo)