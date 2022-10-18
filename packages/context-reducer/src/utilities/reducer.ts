import { Actions, Reducer } from '../types';

export default function createReducer(actions: Actions): Reducer {
  return (state, { action, options }) => actions[action](state, options);
}
