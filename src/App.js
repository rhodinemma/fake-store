import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
