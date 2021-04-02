import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/Cart';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import Order from './components/Order/Order';

export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/cart">
            <Cart/>
          </PrivateRoute>
          <PrivateRoute path="/delete">
            <DeleteProduct/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
