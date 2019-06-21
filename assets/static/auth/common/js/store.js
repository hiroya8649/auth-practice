import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import history from '@/common/js/history';
import createRootReducer from '@/reducer/index';
// import { clearError } from '../action/ErrorAction';

// function clearErrorOnPageMove(store) {
//   window.addEventListener('hashchange', () => {
//     store.dispatch(clearError());
//   }, false);
// }

function configureStore() {
  /* eslint-disable-next-line no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      createLogger(),
      thunk,
    )),
  );
  // clearErrorOnPageMove(store);
  return store;
}

const store = configureStore();

export default store;
