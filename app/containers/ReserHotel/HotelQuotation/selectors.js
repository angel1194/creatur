import { createSelector } from 'reselect';

/**
 * Direct selector to the hotelQuotation state domain
 */
const selectHotelQuotationDomain = () => (state) => state.get('hotelQuotation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HotelQuotation
 */

const makeSelectHotelQuotation = () => createSelector(
  selectHotelQuotationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHotelQuotation;
export {
  selectHotelQuotationDomain,
};
