import axios from 'axios'
import config from '../config'
import { SET_ASSIGNED, START_ASSIGNED_TASK } from './types'

export function fetchAssignedTask(userId) {
    return dispatch => {
        return axios.get(`${config.baseUrl}/tasks/assigned/${userId}`).then(res => {
            if (res.data.status === 'success') {
                dispatch(setAssigned(res.data.assigned))
            }
        })
    }
}

export function setAssigned(tasks) {
    return {
        type: SET_ASSIGNED,
        tasks
    }
}

export function removeAssignedTaskByID(task_id) {
    console.log(`${task_id} is started--> go to next page to view`)
    return {
        type: START_ASSIGNED_TASK,
        task_id
    }
}