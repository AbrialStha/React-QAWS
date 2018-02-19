import React, { Component } from 'react'
import Board from 'react-trello'
import './trello_style.css'

const CustomCard = props => {
    return (
        <div className="card board_task">
            <div className="card-body">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <p className="card-text">
                    {props.description}
                </p>
                <div className="row">
                    <div className="col-6 text-primary">{props.status}</div>
                    <div className="col-6">
                        <b>Priority: </b>
                        <span className="text-danger">{props.priority}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <b>Reporter: </b>
                    <a>{props.reporter}</a>
                </div>
            </div >
        </div >
    )
}

class Trello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            todo: [],
            inprogress: [],
            completed: []
        }
        this.shouldReceiveNewData = this.shouldReceiveNewData.bind(this)
    }

    componentWillMount() {
        //async request will be handle here
        const todo = [
            {
                "id": "5a5a225fd98f802f3c338094",
                "title": "hello task",
                "description": "asdfj",
                "priority": "high",
                "due_date": "2018-01-17T00:00:00.000+0000",
                "reported_date": "2018-01-13T15:14:39.512+0000",
                "run_date": null,
                "end_date": null,
                "status": "minor",
                "resolve": false,
                "reporter": "Karishma Shakya",
            }
        ]
        const inprogress = []
        const completed = []

        this.setState({
            isloading: false,
            todo: todo,
            inprogress: inprogress,
            completed: completed
        })
    }

    shouldReceiveNewData = nextData => {
        console.log('New card has been added')
        console.log(nextData)
        // this.forceUpdate(() => {
            
        // })
    }

    handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
        console.log('drag ended')
        console.log(`cardId: ${cardId}`)
        console.log(`sourceLaneId: ${sourceLaneId}`)
        console.log(`targetLaneId: ${targetLaneId}`)
    }

    render() {
        const data = {
            lanes: [
                {
                    id: 'to_do',
                    title: 'To Do Tasks',
                    label: `${this.state.todo.length}`,
                    cards: this.state.todo
                },
                {
                    id: 'in_progress',
                    title: 'In Progress',
                    label: `${this.state.inprogress.length}`,
                    cards: this.state.inprogress
                },
                {
                    id: 'completed',
                    title: 'Completed',
                    label: `${this.state.completed.length}`,
                    cards: this.state.completed
                }
            ]
        }
        return (
            <Board
                draggable
                data={data}
                customCardLayout
                className="trello-board"
                handleDragEnd={this.handleDragEnd}
                onDataChange={this.shouldReceiveNewData}
            >
                <CustomCard />
            </Board>
        )
    }
}

export default Trello