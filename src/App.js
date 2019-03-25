import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock/Clock.js';
import Nav from './Acceuil'; 
import Tab from './Tab'; 

 class App extends Component {
    
    constructor(props) {
super(props);
this.state = { running: true };
this.start = this.start.bind(this);
this.stop = this.stop.bind(this);
}
    
    
render() {
return (
<div className="App">
    < Nav/>
    <Tab/>

<Clock date={new Date()}/>
<button onClick={this.start}>Start</button>
<button onClick={this.stop}>Stop</button>

</div>
);
}

start() {
this.setState({ running: true });
}
stop() {
this.setState({ running: false });
}

}
export default App; 
