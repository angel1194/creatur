/*
 *
 * Available actions
 *
 */

import {
  LOAD_CARS,
  ADD_CAR_CHECKED,
  RESET_CAR_CHECKED,
} from './constants';

export function loadCar() {
  return {
    type: LOAD_CARS,
  };
}
export function addCarChecked(id, state){
  return{
    type: ADD_CAR_CHECKED,
    id,
    state,
  }
}

export function resetCarChecked(){
  return {
    type:RESET_CAR_CHECKED,
  }
}
