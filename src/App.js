import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blogdetails from './Blogdetails';

function App() {

  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route  exact path="/">
          <Home /> 
          </Route>
          <Route  path="/create">
          <Create />
          </Route>
          <Route  path="/blogs/:id">
          <Blogdetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
