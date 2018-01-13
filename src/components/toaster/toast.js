import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toast extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.msg_type = this.msg_type.bind(this)
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id)
    }

    msg_type = (type) => {
        switch (type) {
            case 'warning':
                return "toast toast-warning"
            case 'success':
                return "toast toast-success"
            case 'danger':
                return "toast toast-danger"
            default:
                return 'toast'
        }
    }
    render() {
        const { type, text } = this.props.message
        const class_name = this.msg_type(type)
        return (
            <div className={class_name} style={{ display: 'block' }}>
                <button type="button" className="toast-close-button" onClick={this.onClick}>×</button>
                <div className="toast-message">
                    {text}
                </div>
            </div>
        )
    }
}

Toast.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default Toast