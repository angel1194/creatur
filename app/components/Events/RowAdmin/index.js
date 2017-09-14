/**
*
* RowAdmin
*
*/

import React from 'react';
import styled from 'styled-components';


function RowAdmin(props)  {
  // eslint-disable-line react/prefer-stateless-functio
    return (
      <tbody>
        <tr>
          <td>{props.Hotels.name}</td>
          <td>{props.Hotels.address}</td>
          <td><img src={props.Hotels.image} alt="imagen" width='100'/></td>
          <td> {props.Hotels.star}</td>
          <td> {props.Hotels.description}</td>
          <td>{props.Hotels.cancellation}</td>
          <td><button onClick={()=>props.delete(props.keyHotel)} className='fa-trash'/></td>
          <td><button onClick={()=>props.update(props.keyHotel,props.Hotels)} className='fa-pencil-square'/></td>
          <td><button  className='fa-plus-square-o '/></td>
        </tr>
      </tbody>
    );
}

export default RowAdmin;
