/**
*
* RowAdmin
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import AddRooms from '../../../components/Events/AddRooms'

const ButtonIcon=styled(FontAwesome)`
  cursor:pointer;
`;



function RowAdmin (props)  {
    return (
      <tbody>
        <tr>
          <td>{props.Hotel[props.keyHotel].name}</td>
          <td>{props.Hotel[props.keyHotel].address}</td>
          <td><img src={props.Hotel[props.keyHotel].image} alt="imagen" width='100'/></td>
          <td> {props.Hotel[props.keyHotel].star}</td>
          <td> {props.Hotel[props.keyHotel].description}</td>
          <td>{props.Hotel[props.keyHotel].cancellation}</td>
          <td><ButtonIcon onClick={()=>props.delete(props.keyHotel)} name='trash'/></td>
          <td><ButtonIcon name='pencil-square'/></td>
          <td><AddRooms hotelData={props.Hotel} keyHotel={props.keyHotel}/></td>
        </tr>
      </tbody>
    );
}

export default RowAdmin;
