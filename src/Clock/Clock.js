import React, { Component } from 'react';

class Clock extends Component {
    
constructor(props) {
super(props);
this.date = new Date();   
}
   
componentWillUnmount() {
clearInterval(this.timerID);
}
    
componentDidMount() {
this.timerID = setInterval(() => {
if (this.props.run) {
this.setState({
date: new Date()
});
}
}, 1000);
}  
  
displayHour() {
return (
<div>
{this.state.date.toLocaleTimeString()}
</div>
)   
}
    
displayMessage() {
return (
<div>
Clock is stopped
</div>
);
}
    
  render() {
if (this.props.run) {
return this.displayHour();
} else {
return this.displayMessage();
}
}  
    
   }


export default Clock;