import React, { Suspense, lazy } from 'react';
import './App.scss';
import {Route, BrowserRouter } from 'react-router-dom';

//Importing Pages

//Sign in
const MainLogin = lazy(()=>import('./pages/SignIn/MainLogin/MainLogin'));
const ForgotPassword = lazy(()=>import('./pages/SignIn/ForgotPassword/ForgotPassword'));
const SignUp = lazy(()=>import('./pages/SignIn/SignUp/SignUp'));

//Dashboard
const Dashboard = lazy(()=>import('./pages/Dashboard/Dashboard'));

//Products
const Products = lazy(()=>import('./pages/Products/Products'));
const AddProduct = lazy(()=>import('./pages/Products/AddProduct'));

//Promotions
const Promotions = lazy(()=>import('./pages/Promotions/Promotions'));

//Orders
const Orders = lazy(()=>import('./pages/Orders/Orders'));
const Order = lazy(()=>import('./pages/Orders/Order'));

//Accounts
const Account = lazy(()=>import('./pages/Account/Account'));

function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback="f">

        {/* Sign In */}
        <Route path='/' exact component={MainLogin} />
        {/* <Route path='/log-in' exact component={MainLogin} /> */}
        <Route path='/reset-password' component={ForgotPassword} />
        <Route path='/create-account' component={SignUp} />

        {/* Dashboard */}
        <Route path='/dashboard' component={Dashboard} />

        {/* Products */}
        <Route path='/products' component={Products} />
        <Route path='/add-product' component={AddProduct} />

        {/* Orders */}
        <Route path='/orders' component={Orders} />
        <Route path='/order/:id' exact component={Order} />

        {/* Promotions */}
        <Route path='/promotions' component={Promotions} />


         {/* Accounts */}
         <Route path='/manage-account' component={Account} />

      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
