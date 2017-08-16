import { createSelector } from 'reselect';

/**
 * Direct selector to the rooms state domain
 */
const selectRoomsDomain = () => (state) => state.get('rooms');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Rooms
 */

const makeSelectRooms = () => createSelector(
  selectRoomsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRooms;
export {
  selectRoomsDomain,
};
