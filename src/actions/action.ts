import actionCreatorFactory, {ActionCreator} from 'typescript-fsa';
const factory = actionCreatorFactory();

const createAction = <T>(type: string): ActionCreator<T> => {
  const actionCreator = factory<T>(type);

  // add name for redux-saga: take(addLater)
  actionCreator.toString = () => type;

  return actionCreator;
};

export const add = createAction<{num: number}>('ADD');
export const addLater = createAction<{num: number, delay: number}>('ADD_LATER');
