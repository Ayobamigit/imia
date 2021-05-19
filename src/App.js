import React, { Suspense, lazy } from 'react';
import './App.scss';
import {Route, BrowserRouter, Switch } from 'react-router-dom';

//Importing Pages

//Sign in
const MainLogin = lazy(()=>import('./pages/Merchant/SignIn/MainLogin/MainLogin'));
const ForgotPassword = lazy(()=>import('./pages/Merchant/SignIn/ForgotPassword/ForgotPassword'));
const SignUp = lazy(()=>import('./pages/Merchant/SignIn/SignUp/SignUp'));

//Dashboard
const Dashboard = lazy(()=>import('./pages/Merchant/Dashboard/Dashboard'));

//Products
const Products = lazy(()=>import('./pages/Merchant/Products/Products'));
const AddProduct = lazy(()=>import('./pages/Merchant/Products/AddProduct'));

//Promotions
const Promotions = lazy(()=>import('./pages/Merchant/Promotions/Promotions'));

//Orders
const Orders = lazy(()=>import('./pages/Merchant/Orders/Orders'));
const Order = lazy(()=>import('./pages/Merchant/Orders/Order'));

//Accounts
const Account = lazy(()=>import('./pages/Merchant/Account/Account'));

// Buyer routes

//Home page
const HomePage = lazy(()=>import('./pages/Buyer/HomePage/HomePage'));

//Buyer-Account page
const BuyerAccount = lazy(()=>import('./pages/Buyer/BuyerAccount/BuyerAccount'));

function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback="f">
        <Switch>
          {/* Sign In */}
          <Route path='/' exact component={MainLogin} />
          <Route path='/log-in' exact component={MainLogin} />
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

          {/* Buyer Module */}

          {/* Buyer home page */}

          <Route path='/home' component={HomePage} />

            {/* Buyer home page */}
          <Route path='/buyer-account' exact component={BuyerAccount} />
          <Route path='/buyer-account/:id' exact component={BuyerAccount} />
        </Switch>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
