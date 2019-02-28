import { createSelector } from 'reselect'

import * as rootSelectors from './rootSelectors'

export const counter = createSelector(
  rootSelectors.getSimple,
  simple => simple.counter
);
