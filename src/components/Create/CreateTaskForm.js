import React, { Component } from 'react'
import TextField from '../common/Textfield'
import TextArea from '../common/TextArea'
import RadioButton from './RadioButton'
import SelectUser from './SelectUser'

class CreateTaskForm extends Component {
    render() {
        return (
            <form className="create_task">
                <TextField id='task_title' label='Title' helpText='Enter the title for the task.' />
                <TextArea id="task_description" label="Description" helpText="Enter the description for the task." />
                <SelectUser />


                <div className="row">
                    <div className="col-6">
                        <RadioButton />
                    </div>
                    <div className="col-6">
                        <div className="form-group">
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