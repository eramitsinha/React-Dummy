import React, { Component } from 'react'

export class FetchApiGetClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         data :[]
      }
    }

    componentDidMount()
    {
        fetch("http://localhost:3001/users").then((result)=>{
            result.json().then((resp)=>{
                this.setState({data : resp})
            })
        })
    }
    
    render() {
        return (
        <div>
            <h4>Fetch Data using GET Method - Class Compoonent</h4>
            <table border="2" cellpadding="10">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Company</th>
                    <th>Email</th>
                </tr>
                {
                    this.state.data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.company}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                }
            </table>
        </div>
        )
    }
    }

export default FetchApiGetClass
