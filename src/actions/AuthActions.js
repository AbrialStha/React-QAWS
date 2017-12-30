import axios from 'axios'
import config from '../config'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER } from './types'


export function loginRequest(data) {
    return dispatch => {
        return axios.post(`${config.baseUrl}/login`, data).then(res => {
            const token = res.data.authtoken
            localStorage.setItem('Authorization', token)
            setAuthorizationToken(token)
            const userObj = res.data.userObj
            console.log(userObj)
            localStorage.setItem('user', JSON.stringify(userObj))
            dispatch(setCurrentUser(userObj))
        })
    }
}

export function getSessionUser() {
    return dispatch => {
        return axios.get(`${config.baseUrl}/session`).then(res => {
            const userObj = res.data.user
            dispatch(setCurrentUser(userObj))
        })
    }
}

export function logoutRequest() {
    return dispatch => {
        axios.delete(`${config.baseUrl}/logout`).then(res => {
            localStorage.removeItem('Authorization')
            localStorage.removeItem('user')
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