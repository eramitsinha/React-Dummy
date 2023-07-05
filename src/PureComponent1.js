import React, { Component, PureComponent } from 'react'

export class PureComponent1 extends PureComponent {
    constructor()
    {
        super();
        this.state = {
            count : 0
        }
    }
    render() {
        console.log("Render..")
        return (
        <div>
            <h1>Count = {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count})}>
                Update
            </button>
        </div>
        )
    }
}

export default PureComponent1
