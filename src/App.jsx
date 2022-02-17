import './App.css'; // ./ - в той же папке. Импорт стилей ./../ - в родительскую папку
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const pages = [{ 'link': '/', 'node': <Profile /> },
    { 'link': '/dialogs/*', 'node': <Dialogs /> },
    { 'link': '/books', 'node': <Dialogs /> },
    { 'link': '/reviews', 'node': <Reviews /> },
    { 'link': '/storage', 'node': <Dialogs /> },
    { 'link': '/gallery', 'node': <Gallery /> }]

    return (
        <BrowserRouter>
            <Header />
            <main role="main" className='container'>
                <div className='row' >
                    <main className='ms-sm-auto px-md-0'>
                        <Routes>
                            {pages.map((item) => {
                                return <Route path={item.link} element={item.node} />
                            })}
                        </Routes>
                    </main>
                </div>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;