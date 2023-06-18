import React, { Component } from 'react'

export class StateClassComp2 extends Component {
    constructor()
    {
        super();
        this.state = {
            data : 0
        }
    }

    abc()
    {
        this.setState({data:this.state.data+1})
    }

    render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.abc()}>Increment</button>    
      </div>
    )
  }
}

export default StateClassComp2
