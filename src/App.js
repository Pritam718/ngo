import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter >
      <Nav />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
