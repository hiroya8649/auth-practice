import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import configureStore from '../common/js/configureStore';
import createRootReducer from './reducer/index';
import './style/app.scss';
import UserLoginPage from './container/UserLoginPage';
import UserCreatePage from './container/UserCreatePage';
import UserCreateFinishPage from './container/UserCreateFinishPage';
import TestPage from './container/TestPage';
import AboutMePage from './container/AboutMePage';
import UserComfirmPage from './container/UserComfirmPage';

const [store, history] = configureStore(createRootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={UserLoginPage} />
            <Route exact path="/signup" component={UserCreatePage} />
            <Route path="/signup/finished" component={UserCreateFinishPage} />
            <Route path="/confirm" component={UserComfirmPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/about_me" component={AboutMePage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
