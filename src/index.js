import reportWebVitals from './reportWebVitals';
import { renderPage } from './render.js'

import state from './redux/state.js'
import { addReview, addMessage, updateNewReview } from './redux/state.js'

renderPage(state, addReview, addMessage, updateNewReview)
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();