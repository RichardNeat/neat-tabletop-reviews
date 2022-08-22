import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Categories from './Components/Categories';
import ReviewById from './Components/Review/ReviewById';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path='/:category' element={<Categories />}/>
          <Route path='/review/:review_id' element={<ReviewById />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
