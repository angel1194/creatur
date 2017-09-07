/**
*
* RowTicket
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


function RowTicket (props){ // eslint-disable-line react/prefer-stateless-function
    return (
       <table>
        <tbody>
          <tr>
            <td className='bodyRow'>{props.Tickets.date}</td>
            <td className='bodyRow'>{props.Tickets.key}</td>
            <td className='bodyRow'>{props.Tickets.price}</td>
            <td className='bodyRow'>{props.Tickets.section}</td>
            <td className='bodyRow'><span className='fa-trash'></span></td>
            <td className='bodyRow'><span className='fa-pencil-square'></span></td>
            <td className='bodyRow'><span className='fa-plus-square-o'></span></td>
          </tr>
        </tbody>
      </table>
    );
}

export default RowTicket;
