import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";

import {Provider} from "react-redux";

import { Router, browserHistory } from 'react-router';
import reducers from "../components/reducers";
import routes from "../components/routes";

var {studentReducer} = reducers;
const store = createStore(studentReducer, _data);

render(<Provider store={store} key="provider">
            <Router history={browserHistory}>
                {routes}
            </Router>
        </Provider>, document.getElementById("container"));


