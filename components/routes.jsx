import React, {Component} from "react";
import {Route, IndexRoute} from "react-router";

import Home from "./home/Home";
import Layout from "./layout/Layout";
import StudentList from "./student/StudentList";

var routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/students"  component={StudentList} />
    </Route>
);

export default routes;