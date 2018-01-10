import React, { Component } from 'react'

class RadioButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form-group bmd-form-group is-filled">
                <div className="heading">Priority</div>
                <br />
                <div className="radio">
                    <label>
                        <input type="radio" name="task_priority" id="task_priority" value="high" defaultChecked />High
                        <span className="bmd-radio"></span>
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="task_priority" id="task_priority" value="Normal" />Normal
                        <span className="bmd-radio"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default RadioButton