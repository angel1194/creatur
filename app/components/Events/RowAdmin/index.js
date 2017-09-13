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
          <td>{props.Hotels.name}</td>
          <td>{props.Hotels.address}</td>
          <td><img src={props.Hotels.image} alt="imagen" width='100'/></td>
          <td> {props.Hotels.star}</td>
          <td> {props.Hotels.description}</td>
          <td>{props.Hotels.cancellation}</td>
          <td><ButtonIcon onClick={()=>props.delete(props.keyHotel)} name='trash'/></td>
          <td><ButtonIcon name='pencil-square'/></td>
          <td><AddRooms hotelName={props.Hotels.name}/></td>
          {/*<td><ButtonIcon name='pencil-square'/></td>*/}
        </tr>
      </tbody>
    );
}

export default RowAdmin;
