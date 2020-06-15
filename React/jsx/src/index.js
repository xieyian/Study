//Import react and react-dom 
import React from 'react';
import ReactDOM from 'react-dom';


// function clickmetest() {
//     return "Click me plz !!!";
// }
//create react component
const App = () => {
    const clickmetest = {test: "Click me!!!" };
    const style = { backgroundColor:'blue', color:"white", fontSize: "3rem"}
    return (
        <div>
            <label className="label" htmlFor="name">enter name</label>
            <input id="name" type="text" />
    <button style={style}>{clickmetest.test}</button>
        </div>
    );
};

//take react component and show it on the screen  
ReactDOM.render(
<App />,
document.querySelector('#root')
);