import './App.css'; // ./ - в той же папке. Импорт стилей ./../ - в родительскую папку
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddReview from './components/Reviews/AddReview/AddReview';

const App = (props) => {
    const { state, dispatch } = props
    const { main_page_content, dialogs_content, user, gallery_content, review_page_content, navlinks, footer } = state
    const pages =
        [{ 'link': '/', 'node': <MainPage content={main_page_content} /> },
        {
            'link': '/dialogs/*',
            node: <Dialogs content={dialogs_content}
                user={user} dispatch={dispatch} />
        },
        { 'link': '/reviews', 'node': <Reviews reviews={review_page_content.reviews} /> },
        { 'link': '/gallery', 'node': <Gallery content={gallery_content} /> },
        { 'link': '/add_review', 'node': <AddReview new_review={review_page_content.new_review} dispatch={dispatch} /> }]

    return (
        <BrowserRouter>
            <Header navlinks={navlinks} />
            <main role="main" className='container'>
                <div className='row' >
                    <main className='ms-sm-auto px-md-0'>
                        <Routes>
                            {pages.map((item, index) => {
                                return <Route path={item.link} element={item.node} key={`page_${index}`} />
                            })}
                        </Routes>
                    </main>
                </div>
            </main>
            <Footer content={footer} />
        </BrowserRouter>
    );
}
export default App;