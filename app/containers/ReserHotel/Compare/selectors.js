import { createSelector } from 'reselect';

/**
 * Direct selector to the compare state domain
 */
const selectCompareDomain = () => (state) => state.get('compare');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Compare
 */

const makeSelectCompare = () => createSelector(
  selectCompareDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompare;
export {
  selectCompareDomain,
};
