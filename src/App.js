import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './routes/admin/product/AddProduct';
import EditProduct from './routes/admin/product/EditProduct';
import AdminPage from './routes/admin/AdminPage'
import HomePage from './routes/HomePage';
import Cart from './routes/user/Cart';
import LoginForm from './routes/user/form/LoginForm';
import Payment from './routes/user/Payment';
import Product from './routes/user/Product';
import RegisterForm from './routes/user/form/RegisterForm';
import Categories from './routes/user/Categories';
import Wishlist from './routes/user/Wishlist';
import Profile from './routes/user/Profile';
import EditProfile from './routes/user/EditProfile';
import Result from './routes/user/Result';
import Redirect from './components/Redirect';
import ProductList from './routes/user/categories/ProductList';
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* Admin Routes */}
          <Route path='/admin/product/add' exact component={AddProduct} />
          <Route path='/admin/product/edit' exact component={EditProduct} />
          <Route path='/admin/home' exact component={AdminPage} />
          {/* User Routes */}
          <Route path='/login' exact component={LoginForm} />
          <Route path='/register' exact component={RegisterForm} />
          <Route path='/product' exact component={Product} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/profile/edit' exact component={EditProfile} />
          <Route path='/result' exact component={Result} />
          {/* Categories Routes */}
          <Route path='/productList' exact component={ProductList} />
          {/* Unknown Route */}
          <Route path='*' component={Redirect} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
