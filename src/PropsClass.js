import React, { Component } from 'react'

export class PropsClass extends Component {
  render() {
    return (
      <div>
        <h2>
            Name : {this.props.name}
            <br />
            Email : {this.props.email}
        </h2>
      </div>
    )
  }
}

export default PropsClass
