import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
