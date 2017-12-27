import axios from 'axios'
import config from '../config'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER } from './types'


export function loginRequest(data) {
    return dispatch => {
        return axios.post(`${config.baseUrl}/login`, data).then(res => {
            const token = res.data.authtoken
            const userObj = res.data.userObj
            localStorage.setItem('Authorization', token)
            localStorage.setItem('name', userObj.name)
            localStorage.setItem('email', userObj.email)
            setAuthorizationToken(token)
            dispatch(setCurrentUser(userObj))
        })
    }
}

export function logoutRequest() {
    return dispatch => {
        axios.delete('http://localhost:5500/api/v1/logout').then(res => {
            localStorage.removeItem('Authorization')
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            setAuthorizationToken(false)
            dispatch(setCurrentUser({}))
            console.log(res.data)
        })
    }
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}