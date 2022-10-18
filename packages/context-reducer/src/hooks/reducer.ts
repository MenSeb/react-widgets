import { useContextDispatch, useContextState } from './index';

export default function useContextReducer() {
  return {
    dispatch: useContextDispatch(),
    state: useContextState(),
  };
}
