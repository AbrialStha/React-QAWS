import React, { Component } from 'react'
import Todo from './Todo';
import Assigned from './Assigned';

class Board extends Component {

    render() {
        return (
            <div className="row">
                <Todo />
                <Assigned />
            </div>
        )
    }
}

export default Board