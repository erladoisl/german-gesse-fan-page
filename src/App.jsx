import './App.css'; // ./ - в той же папке. Импорт стилей ./../ - в родительскую папку
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
    const pages = [{ 'link': '/', 'node': <MainPage content={props.state.main_page_content} /> },
    {
        'link': '/dialogs/*', 
        'node': <Dialogs content={props.state.dialogs_content}
            user={props.state.user}/>
    },
    // { 'link': '/books', 'node': < /> },
    { 'link': '/reviews', 'node': <Reviews reviews={props.state.reviews} /> },
    // { 'link': '/store', 'node': < /> },
    { 'link': '/gallery', 'node': <Gallery content={props.state.gallery_content} /> }]

    return (
        <BrowserRouter>
            <Header navlinks={props.state.navlinks} />
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
            <Footer content={props.state.footer} />
        </BrowserRouter>
    );
}

export default App;