import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/navbar/navbar';
import RegForm from '../src/containers/regForm/regform'
import LoginForm from '../src/containers/loginForm/loginForm';
import ProductList from './containers/productList/productlist';
import AddProduct from '../src/containers/addProduct/addProduct';
import logout from './containers/logout/logout'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Navbar></Navbar>
            <Switch>
              <Route path="/registeration" exact component={RegForm}></Route>
              <Route path="/login" exact component={LoginForm}></Route>
              <Route path="/products" exact component={ProductList}></Route>
              <Route path="/addproducts" exact component={AddProduct}></Route>
              <Route path="/productsperuser" exact component={ProductList}></Route>
              <Route path="/editproducts/:proID" exact component={AddProduct}></Route>
              <Route path="/logout" exact component={logout}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;