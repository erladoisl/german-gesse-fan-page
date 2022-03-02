import reportWebVitals from './reportWebVitals';
import store from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderPage = (state, dispatch) => {
    ReactDOM.render( < React.StrictMode >
        <
        App state = { state }
        dispatch = { dispatch }
        /> </React.StrictMode > ,
        document.getElementById('root')
    );
}


renderPage(store.getState(), store.dispatch.bind(store))
reportWebVitals();

store.subscribe(renderPage);