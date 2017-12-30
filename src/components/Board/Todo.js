import React, { Component } from 'react'

class Todo extends Component {
    render() {
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

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo