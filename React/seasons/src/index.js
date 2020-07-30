import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }
    //same with above 
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>  this.setState({errorMessage: err.message}) 
        ); 
    }
    componentDidUpdate() {
        console.log("My component update")
    }


    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return  <SeasonDisplay lat={this.state.lat} />;
        }
        return <Loader message='please accept location !!!' />;
    
    }
    // have to define render!!
    render() {
        return (
            <div style={{border: "20px solid red"}}>
                {this.renderContent()}
            </div>
        );
    }
        
}

ReactDOM.render(<App />,document.querySelector('#root'));
