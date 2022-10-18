import * as React from 'react';
import { createError } from '../utilities';
import { ContextDispatch } from '../contexts';

export default function useContextDispatch() {
  const dispatch = React.useContext(ContextDispatch);

  if (dispatch !== undefined) return dispatch;

  throw createError('useContextDispatch');
}
