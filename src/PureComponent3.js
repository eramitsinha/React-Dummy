import React, { Component, PureComponent } from 'react'

export class PureComponent3 extends PureComponent {
  render() {
    console.log("Render2")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    )
  }
}

export default PureComponent3


