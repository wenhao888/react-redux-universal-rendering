import React from "react";
import {renderToString} from "react-dom/server";
import { RouterContext, match } from 'react-router'
import { createStore } from 'redux'
import {Provider} from "react-redux";

import routes from "../components/routes";
import reducers from "../components/reducers";

import initialData  from "../components/initialData";

var {studentReducer} = reducers;

var store = createStore(studentReducer, initialData);

function render (req, res, next) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {

        const content = renderToString(
                <Provider store={store}>
                    { <RouterContext {...renderProps}/> }
                </Provider>);

        const data = JSON.stringify(store.getState());

        res.render("index.ejs",{content: content, data:data });
    })
}

module.exports = render;