import { createSelector } from 'reselect';

/**
 * Direct selector to the hotels state domain
 */
const selectHotelsDomain = () => (state) => state.get('hotels');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Hotels
 */

const makeSelectHotels = () => createSelector(
  selectHotelsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHotels;
export {
  selectHotelsDomain,
};
