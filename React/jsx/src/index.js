//Import react and react-dom 
import React from 'react';
import ReactDOM from 'react-dom';

//create react component
const App = () => {
    return <h1>hello world!</h1>
};

//take react component and show it on the screen  
ReactDOM.render(
<App />,
document.querySelector('#root')
);