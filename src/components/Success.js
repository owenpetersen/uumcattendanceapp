import React, { Component } from 'react'

export class Success extends Component {
    
    
    componentDidMount(){
        this.props.addtoDB()
    }
    
    render() {
        return (
            <div>
                <h1> Success</h1>
            </div>
        )
    }
}

export default Success
