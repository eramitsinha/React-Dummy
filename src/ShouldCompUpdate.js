import React, { Component } from 'react'

export class ShouldCompUpdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    shouldComponentUpdate()
    {   
        // Component Gets Updated if count is between 5-10
        if(this.state.count>=5 && this.state.count<=10) 
        {
            return true;
        }
        return false;
    }
    
    render() {
        return (
        <div>
            <h2>Counter : {this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>
                Update
            </button>
        </div>
        )
    }
}

export default ShouldCompUpdate
