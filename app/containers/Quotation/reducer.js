/*
 *
 * Quotation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
  LOAD_LOCATION,
  SELECTED_CARS,
} from './constants';

const initialState = fromJS({
	selected:[],
	location:{}
});

function quotationReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state.set('selected',[])
    case LOAD_LOCATION:
      return state;
    case SELECTED_CARS:
      return state.set('selected',action.cars)
    case RESET_CAR_SELECTED:
      return state.set('selected',[])
    default:
      return state;
  }
}

export default quotationReducer;
