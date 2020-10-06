import React from 'react'
import { connect } from 'react-redux';

const Counter = (props) => {
    const increament = () => {
        props.dispatch({type: "Increament"})
    }

    const decreament = () => {
        props.dispatch({type: "Decreament"})
    }
    return (
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={decreament}>-</button>
                <span>{props.count}</span>
                <button onClick={increament}>+</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    count: state.count,
    console: function() {
        console.log(state);
    },

})
export default connect(mapStateToProps)(Counter);