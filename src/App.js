import React from 'react';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/Navbar.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
