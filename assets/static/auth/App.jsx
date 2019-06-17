import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import store from '@/common/js/store';
import './style/app.scss';
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
import PrivateRoute from '@/component/PrivateRoute';


class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <ConnectedRouter history={store.history}>
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
            <PrivateRoute path="/post" component={PostCreatePage} />
            <Route path="/posts" component={PostListPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
