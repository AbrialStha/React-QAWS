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
        const { id, label, helpText } = this.props
        return (
            <div className={this.state.focused ? "form-group bmd-form-group is-focused" : "form-group bmd-form-group"}>
                <label className="bmd-label-floating">{label}</label>
                <input type="text" className="form-control" id={id} onFocus={this.setFocus} onBlur={this.setBlur} />
                <span className="bmd-help">{helpText}</span>
            </div>
        )
    }
}

export default Textfield