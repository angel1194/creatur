import { createSelector } from 'reselect';

/**
 * Direct selector to the roomer state domain
 */
const selectRoomerDomain = () => (state) => state.get('roomer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Roomer
 */

const makeSelectRoomer = () => createSelector(
  selectRoomerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRoomer;
export {
  selectRoomerDomain,
};
