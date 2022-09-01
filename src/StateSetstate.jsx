import React from "react";
class StateSetstate extends React.Component{
    constructor(props){
        super(props);
        this.state={
// name:"Naveed Zishan",
// email:"naveedzishan1988@gmail.com",
count:0,

        }

    }
    Increase(){
        this.setState({
name:"saquib Ahmed",
email:"saquibahmed2507@gmail.com",
count:this.state.count+1,

        })


    }

    Decrease(){

        this.setState({

            count:this.state.count-1,
        })
    }

    Reset(){

      this.setState({
        count:this.state.count=0,
      })  
    }
    
    render(){

        return(
            <div>

            <h1>hello{this.state.name}</h1>
            <h1>Email-Id{this.state.email}</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <h1>{this.state.count}</h1>
            <button onClick={()=> {this.Increase()}}>Increase</button>
            <button onClick={()=> {this.Decrease()}}>Decrease</button>
            <button onClick={()=> {this.Reset()}}>Reset</button>
        </div>
        )
    }
}
export default StateSetstate;