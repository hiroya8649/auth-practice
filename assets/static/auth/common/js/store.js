import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from '@/reducer/index';
// import { clearError } from '../action/ErrorAction';

// function clearErrorOnPageMove(store) {
//   window.addEventListener('hashchange', () => {
//     store.dispatch(clearError());
//   }, false);
// }

function configureStore() {
  const history = createHashHistory();
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
  return [store, history];
}

const [store, history] = configureStore();

export default { store, history };
