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
  RESET_SELECTED_CAR,
} from './constants';

const initialState = fromJS({
  show:{
      selected:[],
      location:{}
  }
});

function quotationReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    case LOAD_LOCATION:
      return state;
    case SELECTED_CARS:
      return state.setIn(['show','selected'],action.cars)
    case RESET_SELECTED_CAR:
      return state.setIn(['show','selected'],'')
    default:
      return state;
  }
}

export default quotationReducer;
