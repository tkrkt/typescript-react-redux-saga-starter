import {Action, combineReducers, Reducer, Store} from 'redux';
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {add} from '../actions/action';

export interface CounterState {
  count: number;
}

export interface State {
  counter: CounterState;
}

const initialState: State = {
  counter: {count: 0},
};

const counterReducer = reducerWithInitialState(initialState.counter)
  .case(add, (state, {num}) => {
    return {
      ...state,
      count: state.count + num,
    };
  })
  .build();

export const reducer = combineReducers<State>({
  counter: counterReducer,
});
