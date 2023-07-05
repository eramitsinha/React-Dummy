import React, { Component, PureComponent } from 'react'
import PureComponent3 from './PureComponent3';

export class PureComponent2 extends PureComponent {
    constructor()
    {
        super();
        this.state = {
            count : 0
        }
    }
    render() {
        console.log("Render1..")
        return (
        <div>
            <PureComponent3 count={this.state.count} />
            <button onClick={()=>this.setState({count:this.state.count})}>
                Update
            </button>
        </div>
        )
    }
}

export default PureComponent2
