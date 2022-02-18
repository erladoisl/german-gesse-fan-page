import './App.css'; // ./ - в той же папке. Импорт стилей ./../ - в родительскую папку
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
    const pages = [{ 'link': '/', 'node': <Profile content={props.about_gesse} /> },
    {
        'link': '/dialogs/*', 'node': <Dialogs chats={props.chat_widget.chats}
            cur_chat_id={props.chat_widget.cur_chat_id}
            user={props.user} />
    },
    { 'link': '/books', 'node': <Profile content={props.about_gesse} /> },
    { 'link': '/reviews', 'node': <Reviews reviews={props.reviews} /> },
    { 'link': '/storage', 'node': <Profile content={props.about_gesse} /> },
    { 'link': '/gallery', 'node': <Gallery content={props.gallery_content} /> }]

    return (
        <BrowserRouter>
            <Header navlinks={props.navlinks} />
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
            <Footer contacts={props.contacts} />
        </BrowserRouter>
    );
}

export default App;