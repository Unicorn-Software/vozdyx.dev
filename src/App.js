import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Avatar from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Avatar />
      <div className='content' style={{weight: '100%', height: '100%', color: '#fff'}}>
        Типа контент
      </div>
      <Footer />
    </div>
  );
};

export default App;
