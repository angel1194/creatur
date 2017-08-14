import { createSelector } from 'reselect';

/**
 * Direct selector to the flyForm state domain
 */
const selectFlyFormDomain = () => (state) => state.get('flyForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FlyForm
 */

const makeSelectFlyForm = () => createSelector(
  selectFlyFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFlyForm;
export {
  selectFlyFormDomain,
};
