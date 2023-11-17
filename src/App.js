import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Tv from './components/Tv';
import SearchBar from './components/Search';
import  AddedContentPage  from './components/Detail';
import Logins from './components/Logins';
import Signups from './components/Singups';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/detail" Component={Detail} />
      <Route path="/tv" Component = {Tv} /> 
      <Route path="/search" Component = {SearchBar} /> 
      <Route path="/wishlist" Component = {AddedContentPage} /> 
      <Route path="/login" Component = {Login} /> 
      <Route path="/logins" Component={Logins} />
      <Route path="/signups" Component={Signups} />
     </Routes>
    </div>
  );
}

export default App;
