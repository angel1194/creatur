import { createSelector } from 'reselect';

/**
 * Direct selector to the hotelHome state domain
 */
const selectHotelHomeDomain = () => (state) => state.get('hotelHome');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HotelHome
 */

const makeSelectHotelHome = () => createSelector(
  selectHotelHomeDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHotelHome;
export {
  selectHotelHomeDomain,
};
