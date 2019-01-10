import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import configureStore from '../common/js/configureStore';
import createRootReducer from './reducer/index';
// import './style/app.scss';
import LoginPage from './container/LoginPage';

const [store, history] = configureStore(createRootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
