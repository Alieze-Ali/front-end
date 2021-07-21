import { lazy, Suspense } from 'react'; // lazy and Suspense are used to dynamically import components for better web performance
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

// I will refactor imports into lazy imports after Unit 2 is done with building out their forms - tdubs

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>
      {/*  Unit 2 - Your code goes here :) */}
        <Switch>
        {/*  Unit 2 - Your code goes here :) */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
