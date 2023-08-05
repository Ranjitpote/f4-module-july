// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/item/:id" component={DetailPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
