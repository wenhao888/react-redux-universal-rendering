import React, {Component} from "react";

class Student extends Component {
    render () {
        var {id, name} = this.props.student;
        return (
            <div>
               <span> Id: {id},  name: {name} </span>
            </div>
        )
    }
}

export default  Student;