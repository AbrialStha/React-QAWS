import shortid from 'shortid'
import { findIndex } from '../utils/helper'
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types'

const initialState = [
    // {
    //     id: 1,
    //     type: "warning",
    //     text: "this is warning message"
    // },
    // {
    //     id: 2,
    //     type: "danger",
    //     text: "this is danger message"
    // },
    // {
    //     id: 3,
    //     type: "success",
    //     text: "this is success message"
    // }
]
export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ]

        case DELETE_FLASH_MESSAGE:
            const index = findIndex(state, { id: action.id })
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            } else
                return state

        default:
            return state
    }

}