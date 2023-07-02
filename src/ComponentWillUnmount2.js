import React, { Component } from 'react'

export class ComponentWillUnmount2 extends Component {
    componentWillUnmount()
    {
        alert("Element Removed")
    }
    render() {
    return (
      <div>
            <h1>2nd Component</h1>
      </div>
    )
  }
}

export default ComponentWillUnmount2
