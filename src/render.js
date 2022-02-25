import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderPage = (state, addReview, addMessage, updateNewReview) => {
    ReactDOM.render( <
        React.StrictMode >
        <
        App state = { state }
        addReview = { addReview }
        addMessage = { addMessage }
        updateNewReview = { updateNewReview }
        /> <
        /React.StrictMode>,
        document.getElementById('root') // То есть компонента App вставляется в html в узел root
    );
}