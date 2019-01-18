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
import UserPassResetPage from './container/UserPassResetPage';
import UserPassResetSuccessPage from './container/UserPassResetSuccessPage';
import UserPassResetRequestPage from './container/UserPassResetRequestPage';
import UserPassResetSentPage from './container/UserPassResetSentPage';
import ArticleCreatePage from './container/ArticleCreatePage';

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
            <Route path="/forget_password" component={UserPassResetRequestPage} />
            <Route path="/pass_reset" component={UserPassResetPage} />
            <Route path="/pass_reset_sent" component={UserPassResetSentPage} />
            <Route path="/pass_reset_success" component={UserPassResetSuccessPage} />
            <Route path="/article" component={ArticleCreatePage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
