import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sing from './components/Sing.js';
import Home from './components/Home.js';
import Laundry from './components/Laundry.js';
import Pool from './components/Pool.js';
import Header from './components/Header.js';
import Ask from './components/Ask.js';
import Free from './components/Free.js';
import Login from './components/Login.js';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing" element={<Sing />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/free" element={<Free />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
