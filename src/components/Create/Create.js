import React, { Component } from 'react'
import CreateTaskForm from './CreateTaskForm';

class Create extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-header card-header-icon">
                        <i className="material-icons">create</i>
                    </div>
                    <h4 className="card-title">Create Task</h4>
                    <CreateTaskForm />
                </div>
            </div>
        )
    }
}

export default Create