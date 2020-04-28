import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import store from '@/common/js/store';
import history from '@/common/js/history';
import './style/app.scss';
import PrivateRoute from '@/component/PrivateRoute';
import UserLoginPage from './container/page/UserLoginPage';
import UserCreatePage from './container/page/UserCreatePage';
import UserCreateFinishPage from './container/page/UserCreateFinishPage';
import TestPage from './container/page/TestPage';
import AboutMePage from './container/page/AboutMePage';
import UserComfirmPage from './container/page/UserComfirmPage';
import UserPassResetPage from './container/page/UserPassResetPage';
import UserPassResetSuccessPage from './container/page/UserPassResetSuccessPage';
import UserPassResetRequestPage from './container/page/UserPassResetRequestPage';
import UserPassResetSentPage from './container/page/UserPassResetSentPage';
import PostCreatePage from './container/page/PostCreatePage';
import PostListPage from './container/page/PostListPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={PostListPage} />
            <Route path="/page/accounts/signup" component={UserCreatePage} />
            <Route path="/page/accounts/signup_finished" component={UserCreateFinishPage} />
            <Route path="/page/accounts/confirm" component={UserComfirmPage} />
            <Route path="/page/accounts/forget_password" component={UserPassResetRequestPage} />
            <Route path="/page/accounts/pass_reset" component={UserPassResetPage} />
            <Route path="/page/accounts/pass_reset_sent" component={UserPassResetSentPage} />
            <Route path="/page/accounts/pass_reset_success" component={UserPassResetSuccessPage} />
            <Route path="/page/accounts/login" component={UserLoginPage} />
            <Route path="/page/test" component={TestPage} />
            <Route path="/page/about_me" component={AboutMePage} />
            <PrivateRoute path="/page/posts/create" component={PostCreatePage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
