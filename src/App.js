import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/index';

import './styles/index.scss';

import { UserProvider } from './stores/userContext';
import { ListProvider } from './stores/listContext';

function App() {
  const user = { fullName: 'Zerrin-Bostan', loggedIn: true };

  return (
    <Router>
      <Switch>
        <UserProvider value={user}>
          <ListProvider>
            <Route exact path="/">
              <Home />
            </Route>
          </ListProvider>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
