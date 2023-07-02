import React, { Component } from 'react'

export class ComponentDidUpdat extends Component {
    constructor(props) {
        console.log("constructor Called")
        super(props)
        
        this.state = {
            count : 0
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("componentDidUpdate Called")
        console.log(prevState.count)
    }
    
    render() {
        console.log("render Called")
        return (
        <div>
            <h1>Count = {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
        </div>
        )
    }
}

export default ComponentDidUpdat
