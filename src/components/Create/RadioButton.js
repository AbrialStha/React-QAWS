import React, { Component } from 'react'

class RadioButton extends Component {
    render() {
        const { name, value, onChange } = this.props
        return (
            <div className="form-group bmd-form-group">
                <div className="heading">Priority</div>
                <br />
                <div className="radio">
                    <label>
                        <input type="radio" name={name} id="task_priority" value="high" checked={value === 'high'} onChange={onChange} />High
                        <span className="bmd-radio"></span>
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name={name} id="task_priority" value="Minor" checked={value === 'Minor'} onChange={onChange} /> Minor
                            < span className="bmd-radio"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default RadioButton