import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducers, { middlewares } from "./reducers"
import App from "./components/App"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const store = createStore(reducers, middlewares)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);