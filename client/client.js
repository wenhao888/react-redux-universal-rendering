import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers} from "redux";

import {Provider} from "react-redux";

import { Router, browserHistory } from 'react-router';

import {  ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from '~/vendor/redux-async-connect'

import routes from "../components/routes";

const store = createStore(combineReducers({reduxAsyncConnect}), _data);


render(<Provider store={store} key="provider">
            <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props}/>} >
                {routes}
            </Router>
        </Provider>, document.getElementById("container"));




