import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
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
          <Header />
          <Feeling />
        </Route>
        <Route path='/understanding'>
        <Header />
        <Understanding />
        </Route>
        
        <Route path='/support'>
        <Header />
        <Supported />
        </Route>
        
        <Route path='/comments'>
        <Header />
        <Comments />
        </Route>
        <Route path='/review'>
        <Review />
        </Route>
        <Route path='/submitted'>
          <SubmittedReview />
        </Route>
        <Route path='/admin'>
        <Admin />
        </Route>
        
        
        
      </Router>
    </div>
  );
}

export default App;
