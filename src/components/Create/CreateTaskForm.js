import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../actions/CreateTaskAction'
import { addflashMessage } from '../../actions/FlashMessageActions'
import PropTypes from 'prop-types'
import TextField from '../common/Textfield'
import TextArea from '../common/TextArea'
import RadioButton from './RadioButton'
import SelectUser from './SelectUser'
import DatePicker from '../common/DatePicker';


class CreateTaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            title: '',
            description: '',
            assiginee: "",
            reporter: this.props.userId,
            priority: 'Minor',
            due_date: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ isLoading: true })

        var prop = Object.getOwnPropertyNames(this.state)

        let task = {}
        prop.forEach(ele => {
            if (ele !== 'isLoading')
                task[ele] = this.state[ele]
        })
        console.log(task)

        this.props.createTask(task).then(
            (res) => {
                this.setState({
                    isLoading: false,
                    title: '',
                    description: '',
                    assiginee: "",
                    reporter: this.props.userID,
                    priority: 'Minor',
                    due_date: ''
                })
            },
            (err) => {
                let data
                try {
                    data = err.response.data
                    this.props.addflashMessage({
                        type: "danger",
                        text: data.err
                    })

                } catch (error) {
                    console.log(error)
                }
                this.setState({ isLoading: false })
            }
        )
    }
    render() {
        const { isLoading } = this.state
        return (
            <form className="create_task" onSubmit={this.onSubmit}>
                <TextField
                    name="title"
                    id='task_title'
                    label='Title'
                    helpText='Enter the title for the task.'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <TextArea
                    name="description"
                    id="task_description"
                    label="Description"
                    helpText="Enter the description for the task."
                    value={this.state.description}
                    onChange={this.handleChange}
                />

                <SelectUser name="assiginee" value={this.state.assiginee} onChange={this.handleChange} />

                <div className="row">
                    <div className="col-6">
                        <RadioButton name="priority" value={this.state.priority} onChange={this.handleChange} />
                    </div>
                    <div className="col-6">
                        <DatePicker value={this.state.due_date} onChange={this.handleChange} />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-raised"
                    disabled={isLoading}>
                    {!isLoading ? 'Create Task' : 'Processing...'}
                </button>
            </form>
        )
    }
}

CreateTaskForm.propTypes = {
    createTask: PropTypes.func.isRequired,
    addflashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        userId: state.auth.user.userId
    }
}
export default connect(mapStateToProps, { createTask, addflashMessage })(CreateTaskForm)