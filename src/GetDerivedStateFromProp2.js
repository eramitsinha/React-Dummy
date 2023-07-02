import React, { Component } from 'react'

export class GetDerivedStateFromProp2 extends Component {
    constructor(props) {
        console.log("constructor method")
        super(props)
      
        this.state = {
           favoritecolor : "Blue"
        }
      }
      static getDerivedStateFromProps(props,state)
      {
        console.log("getDerivedStateFromProps method")
        return {
            favoritecolor : props.favcolor
        }
      }
      render()
      {
        console.log("render method")
        return(
            <div>
                <h1>Favorite Color : {this.state.favoritecolor}</h1>
            </div>
        )
      }
}

export default GetDerivedStateFromProp2
