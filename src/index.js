import reportWebVitals from './reportWebVitals';
import { addReview, addMessage, updateNewReview, subscribe, state } from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderPage = (state, addReview, addMessage, updateNewReview) => {
    ReactDOM.render( < React.StrictMode >
        <
        App state = { state }
        addReview = { addReview }
        addMessage = { addMessage }
        updateNewReview = { updateNewReview }
        /> </React.StrictMode > ,
        document.getElementById('root') // То есть компонента App вставляется в html в узел root
    );
}


renderPage(state, addReview, addMessage, updateNewReview)
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

subscribe(renderPage);