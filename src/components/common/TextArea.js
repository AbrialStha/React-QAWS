import React, { Component } from 'react'

class Textfield extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
    }

    setFocus = () => {
        this.setState({ focused: true })
    }

    setBlur = () => {
        this.setState({ focused: false })
    }

    render() {
        const { id, name, label, helpText, onChange } = this.props
        const isFocused = this.state.focused ? "is-focused" : ""
        const isFilled = this.props.value ? "is-filled" : ""
        const class_name = `form-group bmd-form-group ${isFocused} ${isFilled}`
        
        return (
            <div className={class_name} >
                <label className="bmd-label-floating">{label}</label>
                <textarea
                    type="text"
                    className="form-control"
                    name={name}
                    id={id}
                    value={this.props.value}
                    onFocus={this.setFocus}
                    onBlur={this.setBlur}
                    onChange={onChange}
                    required
                >
                </textarea>
                <span className="bmd-help">{helpText}</span>
            </ div>
        )
    }
}

export default Textfield