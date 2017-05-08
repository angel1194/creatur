import { createSelector } from 'reselect';

/**
 * Direct selector to the hotelResult state domain
 */
const selectHotelResultDomain = () => (state) => state.get('hotelResult');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HotelResult
 */

const makeSelectHotelResult = () => createSelector(
  selectHotelResultDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHotelResult;
export {
  selectHotelResultDomain,
};
