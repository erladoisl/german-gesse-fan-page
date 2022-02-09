import './App.css'; // ./ - в той же папке. Импорт стилей ./../ - в родительскую папку
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
    return ( <
        div className = 'content' > { /*Warning: root node must be only one!!! */ } <
        Header / >
        <
        div className = 'container' >
        <
        div className = 'row' >
        <
        Navbar / >
        <
        Profile / >
        <
        /div>

        <
        div className = 'row' >
        <
        Footer / >
        <
        /div> <
        /div> <
        /div>
    );
}

export default App;