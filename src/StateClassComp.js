import React, { Component } from 'react'

export class StateClassComp extends Component {
    constructor()
    {
        super();
        this.state = {
            data : "Anoop"
        }
    }

    abc()
    {
        this.setState({data:"Rajesh"});
    }

    render() {
    return (
        <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.abc()}>Update</button>
        </div>
    )
  }
}

export default StateClassComp
