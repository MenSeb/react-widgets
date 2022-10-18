import * as React from 'react';
import { createError } from '../utilities';
import { ContextState } from '../contexts';

export default function useContextState() {
  const state = React.useContext(ContextState);

  if (state !== undefined) return state;

  throw createError('useContextState');
}
