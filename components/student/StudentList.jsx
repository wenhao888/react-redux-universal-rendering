import React, {Component} from "react";
import Student from "./Student";
import {asyncConnect } from '~/vendor/redux-async-connect'

import initialData  from "../initialData";


@asyncConnect({
    students: ()=>initialData.students
})export default class StudentList extends Component {
    render() {
        var {students} = this.props;

        return (
           <div>
               {
                   students.map(s=> {
                       return <Student student={s} key={s.id} />
                   })

               }
           </div>
        )
    }
}




