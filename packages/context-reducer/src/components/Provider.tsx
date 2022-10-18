import * as React from 'react';
import { ContextDispatch, ContextState } from '../contexts';
import { createDispatcher, createReducer } from '../utilities';
import { Actions } from '../types';

type ProviderProps = {
  actions: Actions;
  children: React.ReactNode;
  config: (initial: object) => object;
  initial: object;
};

export default function Provider({
  actions,
  children,
  config,
  initial,
}: ProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(
    createReducer(actions),
    initial,
    config,
  );

  const dispatcher = React.useMemo(
    () => createDispatcher(Object.keys(actions), dispatch),
    [actions],
  );

  return (
    <ContextDispatch.Provider value={dispatcher}>
      <ContextState.Provider value={state}>{children}</ContextState.Provider>
    </ContextDispatch.Provider>
  );
}
