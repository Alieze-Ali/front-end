import { lazy, Suspense } from 'react'; // lazy and Suspense are used to dynamically import components for better web performance
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import React from 'react'; //AA

// importing components AA
import OwnerLogin from "./components/OwnerLogin";
import Header from "./components/Header";

// I will refactor imports into lazy imports after Unit 2 is done with building out their forms - tdubs

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>
      {/*  Header goes here*/}
      <Header />
        <Switch>
          <Route path="/login">
            <OwnerLogin />
          </Route>
          
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
