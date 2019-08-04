import ACTION_TYPE from './ActionTypes'

function Tick(time) {
    return {
        type: ACTION_TYPE.TICK,
        time: time
    };
}

export default {Tick}