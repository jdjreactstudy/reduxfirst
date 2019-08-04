import ACTION_TYPE from '../action/ActionTypes'

function Tick(state = {time: 0}, action) {
    if (action.type == ACTION_TYPE.TICK) {
        return {...state, time: action.time + 1}
    }
    return state
}

export default {Tick};