import './App.css'; // ./ - в той же папке. Импорт стилей ./../ - в родительскую папку
import Content from './components/Content';
import Footer from './components/Footer';
// import Header from './components/Header';

function App() {
  return (
    <div> { /*Warning: root node must be only one!!! */}
      <header>
        <img src='https://cdn.worldvectorlogo.com/logos/jira-3.svg' style={height= 10px'}/>  
      </header>
      <Content />
      <Footer />
    </div>
  );
}

export default App;