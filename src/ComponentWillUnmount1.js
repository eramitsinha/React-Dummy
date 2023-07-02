import React, { Component } from 'react'
import ComponentWillUnmount2 from './ComponentWillUnmount2'

export class ComponentWillUnmount1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show :true
      }
    }
    
    render() {
    return (
        <div>
        {
            this.state.show? <ComponentWillUnmount2 />:null
        }
        <button onClick={()=>this.setState({show:true})}>
          Show
        </button>
        <button onClick={()=>this.setState({show:false})}>
          Hide
        </button>
      </div>
    )
  }
}

export default ComponentWillUnmount1
