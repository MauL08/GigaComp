import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AdminForm from './routes/admin/AdminForm';
import AdminHome from './routes/admin/AdminHome';
import ConfirmPage from './routes/admin/ConfirmPage';
import AddProduct from './routes/admin/product/AddProduct';
import EditProduct from './routes/admin/product/EditProduct';
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
import HDD from '././routes/user/categories/HDD';
import SSD from '././routes/user/categories/SSD';
import RAM from '././routes/user/categories/RAM';
import VGA from '././routes/user/categories/VGA';
import PSU from '././routes/user/categories/PSU';
import Processor from '././routes/user/categories/Processor';
import Motherboard from '././routes/user/categories/Motherboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* Admin Routes */}
          <Route path='/admin' exact component={AdminForm} />
          <Route path='/admin/home' exact component={AdminHome} />
          <Route path='/admin/product/add' exact component={AddProduct} />
          <Route path='/admin/product/edit' exact component={EditProduct} />
          <Route path='/admin/authorization' exact component={ConfirmPage} />
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
          <Route path='/vga' exact component={VGA} />
          <Route path='/hard-disk' exact component={HDD} />
          <Route path='/ssd' exact component={SSD} />
          <Route path='/ram' exact component={RAM} />
          <Route path='/power-supply' exact component={PSU} />
          <Route path='/processor' exact component={Processor} />
          <Route path='/motherboard' exact component={Motherboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
