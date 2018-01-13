import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAssignedTask } from '../../actions/AssignedActions'
import { formatDate } from '../../utils/helper'

const Row = (props) => {
    const { _id, title, due_date, reporter, priority, status } = props.task
    return (
        <tr>
            <td>{title}</td>
            <td>{formatDate(due_date)}</td>
            <td>{reporter.name}</td>
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

class Assigned extends Component {
    constructor(props) {
        super(props)
        // console.log("from Assigned", this.props.userId)
        this.props.fetchAssignedTask(this.props.userId)
    }

    taskStarted = (id) => {
        console.log(id)
        this.props.removeTaskByID(id)
    }

    render() {
        const { Loading, tasks, empty } = this.props.assigned
        return (
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header card-header-icon">
                            <i className="material-icons">bookmark</i>
                        </div>
                        <h4 className="card-title">Assigned To me</h4>
                        {
                            Loading ? <div className="loader"></div> :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Due Date</th>
                                            <th>Reporter</th>
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

Assigned.propTypes = {
    // userId: PropTypes.string.isRequired,
    fetchAssignedTask: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    // console.log('from assigned', state)
    return {
        userId: state.auth.user.userId,
        assigned: state.assigned
    }
}

export default connect(mapStateToProps, { fetchAssignedTask })(Assigned)