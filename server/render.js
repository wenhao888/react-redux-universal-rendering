import React from "react";
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from '~/vendor/redux-async-connect'
import { Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import routes from "~/components/routes";

const store = createStore(combineReducers({reduxAsyncConnect}));

function render (req, res, next) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        loadOnServer(renderProps, store).then(() => {


            const content = renderToString(
                <Provider store={store} key="provider">
                    <ReduxAsyncConnect {...renderProps} />
                </Provider>);


            const data = JSON.stringify(store.getState());

            res.render("index.ejs",{content: content, data: data });
        })
    })
}

module.exports = render;