import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import configureStore from '../common/js/configureStore';
import createRootReducer from './reducer/index';
import './style/app.scss';
import UserLoginPage from './container/UserLoginPage';
import UserCreatePage from './container/UserCreatePage';

const [store, history] = configureStore(createRootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={UserLoginPage} />
            <Route path="/signup" component={UserCreatePage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
