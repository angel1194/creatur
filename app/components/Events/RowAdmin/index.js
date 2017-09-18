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
          <td>{props.Hotel.name}</td>
          <td>{props.Hotel.address}</td>
          <td><img src={props.Hotel.image} alt="imagen" width='100'/></td>
          <td> {props.Hotel.star}</td>
          <td> {props.Hotel.description}</td>
          <td>{props.Hotel.cancellation}</td>
          <td><ButtonIcon onClick={()=>props.delete(props.keyHotel)} name='trash'/></td>
          <td><ButtonIcon onClick={()=>props.update(props.keyHotel,props.Hotel)} name='pencil-square'/></td>
          <td><AddRooms hotelData={props.Hotel} keyHotel={props.keyHotel}/></td>

        </tr>
      </tbody>
    );
}

export default RowAdmin;
