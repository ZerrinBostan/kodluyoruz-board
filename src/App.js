import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './stores/combineReducer';

import './styles/index.scss';

function App() {
  const store = createStore(reducers)
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/">
            <Home />
          </Route>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
