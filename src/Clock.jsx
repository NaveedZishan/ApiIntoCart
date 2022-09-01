import React from "react";
// function Clock(){
// return(

// <div> 


//     <h1> Hello World</h1>
//     <h2>The Time Is { new Date().toLocaleTimeString}</h2>
// </div>




// )

// }
// setInterval(Clock,1000);

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   function tick() {
//     Clock date={new Date()} ;
//   }
  
//   setInterval(tick, 1000);
/////////////////////////////////////////Clock by Internet////////////////////
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  //////////////////////////////////////////////////////////////////





/////////  ////////////////////////////////////////////////////////
    // componentWillUnmount() {
    //   clearInterval(this.timerID);
    // }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  



export default Clock;