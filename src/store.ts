import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {State, reducer} from './reducers/reducer';
import rootSaga from './sagas/root';

export default (): Store<State> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore<State>(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
