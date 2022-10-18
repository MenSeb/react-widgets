import { Dispatch, Dispatchers } from '../types';

export default function createDispatcher(
  actions: string[],
  dispatch: Dispatch,
): Dispatchers {
  const dispatchers: Dispatchers = {};

  for (const action of actions)
    dispatchers[action] = (options) => dispatch({ action, options });

  return dispatchers;
}
