import React from 'react';
import {connect} from 'react-redux';

const Countervalue = (props) => {
    return (
        <div>
            <h1>Counter Value</h1>
            <span>{props.count}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(Countervalue);
