/**
*
* RowTable
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
`;

function RowTransport (props) { // eslint-disable-line react/prefer-stateless-function
    return (
      <table>
        <tbody>
          <tr>
            <td className='bodyRow'><img src={props.Transport.image} alt="imagen de transporte" width='100'/> </td>
            <td className='bodyRow'>{props.Transport.price}</td>
            <td className='bodyRow'>{props.Transport.seating}</td>
            <td className='bodyRow'> {props.Transport.type}</td>
            <td className='bodyRow'><span className='fa-trash'></span></td>
            <td className='bodyRow'><span className='fa-pencil-square'></span></td>
            <td className='bodyRow'><span className='fa-plus-square-o'></span></td>
          </tr>
        </tbody>
      </table>
    );
}


RowTransport.propTypes = {

};

export default RowTransport;
