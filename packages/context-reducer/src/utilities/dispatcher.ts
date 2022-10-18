type Dispatch = (action: string, options: object) => object;

type Dispatcher = (options: object) => object;

type Dispatchers = { [key: string]: Dispatcher };

export default function createDispatch(
  actions: string[],
  dispatch: Dispatch,
): Dispatchers {
  const dispatchers: Dispatchers = {};

  for (const action of actions)
    dispatchers[action] = (options) => dispatch(action, options);

  return dispatchers;
}
