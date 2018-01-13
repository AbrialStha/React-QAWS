import React, { Component } from 'react'

class Textfield extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            isempty: true
        }
    }

    setFocus = () => {
        this.setState({ focused: true })
    }

    setBlur = () => {
        this.setState({ focused: false })
    }

    render() {
        const { id, name, label, helpText, onChange, type, required } = this.props
        const isFocused = this.state.focused ? "is-focused" : ""
        const isFilled = this.props.value ? "is-filled" : ""
        const class_name = `form-group bmd-form-group ${isFocused} ${isFilled}`
        return (
            <div className={class_name}>
                <label className="bmd-label-floating">{label}</label>
                <input
                    type={type}
                    className="form-control"
                    name={name}
                    id={id}
                    value={this.props.value}
                    onChange={onChange}
                    onFocus={this.setFocus}
                    onBlur={this.setBlur}
                    required={required}
                />
                <span className="bmd-help">{helpText}</span>
            </div>
        )
    }
}

export default Textfield