import React from 'react';
import './App.css';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/Navbar.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
