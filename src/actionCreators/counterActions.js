import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes"

export const increaseCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decreaseCounter = () => {
    return {
        type: DECREMENT
    }
}