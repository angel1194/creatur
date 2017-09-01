import firebase from './index'
import moment from 'moment'

/* Informacion de los hoteles en firebase */
var rootRef = firebase.database().ref()

export function setRooms(){
  let nightHtlRef = rootRef.child('nightsHotels').orderByKey()
  return nightHtlRef.once('value',snap => {
    return snap.val()
  })
}

export function setHotels(){
  let hotelsRef = rootRef.child('hotels')
  return hotelsRef.once('value',snap => {
    return snap.val()
  })
}