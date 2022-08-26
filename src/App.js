import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext, LoggedInContext } from './contexts/current-user';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Categories from './Components/Categories';
import ReviewById from './Components/Review/ReviewById';
import OrderBy from './Components/Review/Queries';
import ErrorPage from './Components/Review/ErrorPage';
import Users from './Components/Users';
import PostReview from './Components/Review/PostReview';

function App() {

  const [currUser, setCurrUser] = useState('guest');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState([]);

  return (
    <UserContext.Provider value={{currUser, setCurrUser}}>
    <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar categories={categories} setCategories={setCategories}/>
          <Routes>  
            <Route path='/' element={<Home />}/>
            <Route path='/post-review' element={<PostReview categories={categories}/>}/>
            <Route path='/reviews/:category' element={<Categories />}/>
            <Route path='/review/:review_id' element={<ReviewById />}/>
            <Route path='/reviews' element={<OrderBy/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </LoggedInContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
