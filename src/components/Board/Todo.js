import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils/helper'
import { fetchTodoTask, removeTaskByID } from '../../actions/TodoActions'

const Row = (props) => {
    const { _id, title, due_date, priority, status } = props.task
    return (
        <tr>
            <td>{title}</td>
            <td>{formatDate(due_date)}</td>
            <td>{priority}</td>
            <td>
                {
                    status != null ? status :
                        <button className="btn  btn-raised btn-success" onClick={() => props.taskStarted(_id)}>Start</button>
                }
            </td>
        </tr>
    )
}

class Todo extends Component {
    constructor(props) {
        super(props)
        this.props.fetchTodoTask(this.props.userId)
    }

    taskStarted = (id) => {
        console.log(id)
        this.props.removeTaskByID(id)
    }

    render() {
        const { Loading, tasks, empty } = this.props.todo
        return (
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header card-header-icon">
                            <i className="material-icons">assignment</i>
                        </div>
                        <h4 className="card-title">To Do</h4>
                        {
                            Loading ? <div className="loader"></div> :
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
                                            empty ? <tr><td>No Task Found..</td></tr> : tasks.map((task) => <Row task={task} key={task._id} taskStarted={this.taskStarted} />)
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
    // userId: PropTypes.string.isRequired,
    fetchTodoTask: PropTypes.func.isRequired,
    removeTaskByID: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        userId: state.auth.user.userId,
        todo: state.todo
    }
}
export default connect(mapStateToProps, { fetchTodoTask, removeTaskByID })(Todo)