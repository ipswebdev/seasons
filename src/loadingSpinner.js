import React from "react";
const LoadingSpinner = (props) => {
    return (<div className="ui active dimmer">
<div className="ui big text loader">{props.message}</div>
    </div>);
}

LoadingSpinner.defaultProps = {
    message: 'Please Enable the location permission!'
}

export default LoadingSpinner;