import { createSelector } from 'reselect';
/**
 * Direct selector to the available state domain
 */
const selectAvailableDomain = () => (state) => state.get('available');

const selectAvailableState = () => (state) => state.get('available').toJS();

/**
 * Other specific selectors
 */

/**
 * Default selector used by Available
 */

const makeSelectAvailable = () => createSelector(
  selectAvailableDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAvailable;
export {
  selectAvailableDomain,
  selectAvailableState,
  // makeSelectCarstoAvailable
};
