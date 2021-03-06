import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Layout from './components/layout/Layout';
import NewsItemDetail from './components/presentation/NewsItemDetail';
import NewsArticle from './components/containers/NewsArticle';
import { Provider } from 'react-redux';
import store from './stores/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path='/news/:id' component={NewsArticle} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
