import { createSelector } from 'reselect';

/**
 * Direct selector to the payments state domain
 */
const selectPaymentsDomain = () => (state) => state.get('payments');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Payments
 */

const makeSelectPayments = () => createSelector(
  selectPaymentsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPayments;
export {
  selectPaymentsDomain,
};
