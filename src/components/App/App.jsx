import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
import ResponsiveAppBar from '../ButtonAppBar/ButtonAppBar';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import SubmittedReview from '../Review/SubmittedReview'
import Review from '../Review/Review';
import Admin from '../Admin/Admin'


import './App.css';

function App() {

  return (
    <div className='App'>
      
      <Router>
        <Route exact path='/'>
          <ResponsiveAppBar />
          <Feeling />
        </Route>
        <Route path='/understanding'>
        <ResponsiveAppBar />
        <Understanding />
        </Route>
        
        <Route path='/support'>
        <ResponsiveAppBar />
        <Supported />
        </Route>
        
        <Route path='/comments'>
        <ResponsiveAppBar />
        <Comments />
        </Route>
        <Route path='/review'>
        <ResponsiveAppBar />
        <Review />
        </Route>
        <Route path='/submitted'>
        <ResponsiveAppBar />
          <SubmittedReview />
        </Route>
        <Route path='/admin'>
        <ResponsiveAppBar />
        <Admin />
        </Route>
        
        
        
      </Router>
    </div>
  );
}

export default App;
