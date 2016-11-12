import React, {Component} from "react";
import Student from "./Student";
import {connect} from "react-redux";


@connect(state => ({students: state.students }))
export default class StudentList extends Component {
    render() {
        var {students} = this.props;

        return (
            <ul>
                {
                    students.map(s=> {
                         return <Student student={s} key={s.id} />
                    })

                }
            </ul>
        )
    }
}


StudentList.contextTypes = {
    store: React.PropTypes.object
};



