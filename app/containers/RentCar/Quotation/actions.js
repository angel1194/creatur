/*
 *
 * Quotation actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_LOCATION,
  SELECTED_CARS,
  RESET_SELECTED_CAR,
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

export function resertSelectedCar(){
  return{
    type:RESET_SELECTED_CAR,
  }
}
