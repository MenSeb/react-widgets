type Actions = {
  [key: string]: (state: object, options: object) => object;
};

type Reducer = (
  state: object,
  {
    action,
    options,
  }: {
    action: string;
    options: object;
  },
) => object;

export default function createReducer(actions: Actions): Reducer {
  return (state, { action, ...options }) => actions[action](state, options);
}
