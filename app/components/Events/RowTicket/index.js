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
            <td><button onClick={()=>props.delete(props.keyTicket)} className='fa-trash'/></td>
            <td><button className='fa-pencil-square'/></td>
            <td><button className='fa-plus-square-o'/></td>
          </tr>
        </tbody>
      </table>
    );
}

export default RowTicket;
