/**
*
* RowAdmin
*
*/

import React from 'react';
// import styled from 'styled-components';


function RowAdmin(props)  { // eslint-disable-line react/prefer-stateless-function
    return (
      <tbody>
        <tr>
          <td>{props.Hotels.name}</td>
          <td>{props.Hotels.address}</td>
          <td><img src={props.Hotels.image} alt="imagen" width='100'/></td>
          <td> {props.Hotels.star}</td>
          <td> {props.Hotels.description}</td>
          <td>{props.Hotels.cancellation}</td>
          <td><span className='fa-trash'></span></td>
          <td><span className='fa-pencil-square'></span></td>
          <td><span className='fa-plus-square-o '></span></td>
        </tr>
      </tbody>
    );
}

export default RowAdmin;
