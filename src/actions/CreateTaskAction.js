import axios from 'axios'
import config from '../config'
import { addflashMessage } from './FlashMessageActions'

export function createTask(task) {
    return dispatch => {
        return axios.post(`${config.baseUrl}/tasks/create`, task).then(res => {
            console.log(res.data)
            dispatch(addflashMessage({
                type: "success",
                text: `${res.data.task._id} is created sucessfully`
            }))
        })
    }
}