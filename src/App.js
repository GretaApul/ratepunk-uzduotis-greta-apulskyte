import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
