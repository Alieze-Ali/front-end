import { lazy, Suspense } from 'react'; // lazy and Suspense are used to dynamically import components for better web performance
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


// importing components  
import OwnerLogin from "./components/OwnerLogin";



// I will refactor imports into lazy imports after Unit 2 is done with building out their forms - tdubs

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>

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
