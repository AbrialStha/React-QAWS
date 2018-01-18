import axios from 'axios'
import config from '../config'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER, USER_LOGOUT } from './types'


export function loginRequest(data) {
    return dispatch => {
        return axios.post(`${config.baseUrl}/login`, data).then(res => {
            if (res) {
                const token = res.data.authtoken
                localStorage.setItem('Authorization', token)
                setAuthorizationToken(token)
                const userId = res.data.userObj
                console.log(userId)
                localStorage.setItem('user', JSON.stringify(userId))
                dispatch(setCurrentUser(userId))
            }
        })
    }
}

export function getSessionUser() {
    return dispatch => {
        return axios.get(`${config.baseUrl}/session`).then(res => {
            if (res) {
                const userObj = res.data.user
                dispatch(setCurrentUser(userObj))
            }
        })
    }
}

export function logoutRequest() {
    return dispatch => {
        axios.delete(`${config.baseUrl}/logout`).then(res => {
            if (res) {
                localStorage.removeItem('Authorization')
                localStorage.removeItem('user')
                setAuthorizationToken(false)
                dispatch(setCurrentUser({}))
                dispatch(userLogout())
                console.log(res.data)
            }
        })
    }
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}