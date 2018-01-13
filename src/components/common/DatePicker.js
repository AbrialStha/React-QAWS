import React, { Component } from 'react'

class DatePicker extends Component {

    render() {
        return (
            <div className="form-group">
                <div className="heading">Due Date</div>
                <input
                    type="date"
                    className="form-control"
                    name="due_date"
                    defaultValue={this.props.value}
                    onBlur={this.props.onChange}
                />
            </div>
        )
    }
}

export default DatePicker