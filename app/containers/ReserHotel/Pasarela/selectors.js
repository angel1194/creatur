import { createSelector } from 'reselect';

/**
 * Direct selector to the pasarela state domain
 */
const selectPasarelaDomain = () => (state) => state.get('pasarela');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Pasarela
 */

const makeSelectPasarela = () => createSelector(
  selectPasarelaDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPasarela;
export {
  selectPasarelaDomain,
};
