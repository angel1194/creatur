/*
 *
 * Quotation actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_LOCATION,
  SELECTED_CARS,
  RESET_CAR_SELECTED,
} from './constants';

export function loadAction() {
  return {
    type: LOAD_ACTION,
  };
}
export function loadLocation() {
  return {
    type: LOAD_LOCATION,
  };
}

export function selectedCars(cars){
  return{
    type:SELECTED_CARS,
    cars,
  }
}

export function resetCarSelected(){
  return{
    type:RESET_CAR_SELECTED,
  }
}
