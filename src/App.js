import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddProduct from './forms/AddProduct';
import AddSeller from './forms/AddSeller';
import HomePage from './pages/index'
import SearchProduct from './pages/SearchProduct';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={["/", '/home']} exact key="HomePage" component={HomePage} />
        <Route path="/addProduct" exact key="AddForm" component={AddProduct} />
        <Route path="/addSeller" exact key="AddSeller" component={AddSeller} />
        <Route path="/search" exact key="AddSeller" component={SearchProduct} />
      </Switch>
    </Router>
  );
}

export default App;
