import React, { Component } from 'react'

class CreateTaskForm extends Component {
    render() {
        return (
            <form className="create_task">
                <div className="form-group">
                    <label for="task_title" className="bmd-label-floating">Title</label>
                    <input type="text" className="form-control" id="task_title" />
                    <span className="bmd-help">Enter the title for the task.</span>
                </div>
                <div className="form-group">
                    <label for="task_description" className="bmd-label-floating">Description</label>
                    <textarea name="description" className="form-control" id="task_description"></textarea>
                    <span className="bmd-help">Enter the description for the task.</span>
                </div>
                <div className="form-group">
                    <label for="task_assginee" className="bmd-label-floating">Asiginee</label>
                    <select className="form-control" id="task_asigine">
                        <option disabled selected value>Unasigined</option>
                        <option>Abiral Sthapit</option>
                        <option>Karishma Shakya</option>
                        <option>Shree Krishna Shrestha</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <div className="heading">Priority</div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="task_priority" value="Normal" checked /> Normal
                                    </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="task_priority" value="High" /> High
                                    </label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="heading">Due Date</div>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-raised">Create Task</button>
            </form>
        )
    }
}

export default CreateTaskForm