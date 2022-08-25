import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/current-user';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Categories from './Components/Categories';
import ReviewById from './Components/Review/ReviewById';
import OrderBy from './Components/Review/Queries';
import ErrorPage from './Components/Review/ErrorPage';
import Users from './Components/Users';

function App() {

  const [currUser, setCurrUser] = useState('happyamy2016');

  return (
    <UserContext.Provider value={{currUser, setCurrUser}}>
      <BrowserRouter>
        <div className="App">
          <Header user={currUser} />
          <NavBar />
          <Routes>  
            <Route path='/' element={<Home />}/>
            <Route path='/reviews/:category' element={<Categories />}/>
            <Route path='/review/:review_id' element={<ReviewById user={currUser}/>}/>
            <Route path='/reviews' element={<OrderBy/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
