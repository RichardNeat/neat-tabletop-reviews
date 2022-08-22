import './css/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path='/:category' element={<Categories />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
