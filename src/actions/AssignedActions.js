import axios from 'axios'
import config from '../config'
import { SET_ASSIGNED } from './types'

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