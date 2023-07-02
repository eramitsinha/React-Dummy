import React, { Component } from 'react'

export class LifeCycleMethods extends Component {
    constructor(props) {
        console.log("Constructor Method Called")
        super(props)

        this.state = {
            name : "Raj"
        }
        
    }

    componentDidMount()
    {
        console.log("ComponentDidMount Method Called")
    }

    shouldComponentUpdate()
    { 
        console.log("shouldComponentUpdate Method Called")
        return true
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate Method Called")
    }
    
  render() {
    console.log("Render Method Called")
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={()=>this.setState({name : "Singh"})}>Update</button>
      </div>
    )
  }
}

export default LifeCycleMethods

