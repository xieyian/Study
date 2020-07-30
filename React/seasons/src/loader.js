import React from 'react';

const loader = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">
    {props.message}</div>
        </div>
    );
    
};

loader.defaultProps = {
    message: 'Loading...'
};

export default loader;