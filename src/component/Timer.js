import React from 'react'
import TimerAction from "../action/Timer";
import {connect} from "react-redux";
import TICK from "../action/ActionTypes"


class Timer extends React.Component {

    constructor(props) {
        super(props)

        setInterval(() => {
            this.props.Tick(this.props.time)
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.props.time}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        time: state.Tick.time
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Tick: (time) => {
            dispatch(TimerAction.Tick(time))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer)