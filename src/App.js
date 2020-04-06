import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Shop from './components/Shop';
import Cart from './components/Cart';
import {Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
          <Switch>
                <Route exact path ='/' component = { Landing } />
                <Route exact path ='/Shop' component = { Shop } />
                <Route exact path ='/Cart' component = { Cart } />
          </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
