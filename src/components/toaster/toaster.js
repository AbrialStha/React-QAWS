import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from './toast_style.css'
import { deleteFlashMessage } from '../../actions/FlashMessageActions'
import Toast from './toast'

class Toaster extends Component {
    render() {
        const messages = this.props.messages.map(
            message => <Toast key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
        )
        return (
            <div id="toast-container" className="toast-top-right">
                {messages}
            </div>
        )
    }
}

Toaster.propTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flash_messages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(Toaster)