import React, { Component } from 'react'
import { createRef } from 'react'

export class Ref extends Component {
    constructor(props) {
      super(props)
      this.inputRef = createRef()
    }    
      getVal()
      {
        this.inputRef.current.style.color = 'red'
      }
    
    
    render() {
        return (
        <div>
            <input type="text" ref={this.inputRef} /> 
            <br />
            <button onClick={()=>this.getVal()}>Submit</button>
        </div>
        )
    }
}

export default Ref
