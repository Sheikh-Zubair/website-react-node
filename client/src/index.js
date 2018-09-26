import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {  BrowserRouter, Route }  from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/pages/app';
import BookPage from './components/pages/books_page';
import Authors from './components/pages/author';
import reducers from './reducers/index';
import SignupForm from './components/pages/signup_form';
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';
import NavBar from './components/nav_bar/nav_bar';
import './style/style.css';

const store = createStore( reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
          <Header />
          <NavBar />
          <Route exact path="/" component={App} />
          <Route path="/books" component={BookPage} />
          <Route path="/authors" component={Authors} />
          <Route path="/signup" component={SignupForm} />
          <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
