import React from 'react';
import './scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/Aboute';
import Templates from './Pages/Templates';
import Temp from './Pages/Temp';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Switch>
          <Route path="/temp/:tempId" component={Temp} />
          <Route path="/Templates" component={Templates} />
          <Route path="/about" component={About} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
