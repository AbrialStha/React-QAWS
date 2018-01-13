import axios from 'axios'
import config from '../config'
import { SET_TODO, START_TODO_TASK } from './types'

export function fetchTodoTask(userId) {
    return dispatch => {
        return axios.get(`${config.baseUrl}/tasks/todo/${userId}`).then(res => {
            if (res.data.status === 'success') {
                // this.setState({ tasks: res.data.todos, loading: false })
                dispatch(setTodo(res.data.todos))
            }
        })
    }
}

export function setTodo(tasks) {
    return {
        type: SET_TODO,
        tasks
    }
}

export function removeTodoTaskByID(task_id) {
    console.log(`${task_id} is started--> go to next page to view`)
    return {
        type: START_TODO_TASK,
        task_id
    }
}