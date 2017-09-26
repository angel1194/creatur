/**
*
* RowTicket
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
`;

const ButtonIcon=styled(FontAwesome)`
  cursor:pointer;
`;

function RowTicket (props){ // eslint-disable-line react/prefer-stateless-function
    return (
       <table>
        <tbody>
          <tr>
            <td>{props.Tickets.date}</td>
            <td>{props.Tickets.key}</td>
            <td>{props.Tickets.price}</td>
            <td>{props.Tickets.section}</td>
            <td>{props.Tickets.seating}</td>
            <td><ButtonIcon onClick={()=>props.delete(props.keyTicket)} name='trash'/></td>
            <td><ButtonIcon onClick={()=>props.update(props.keyTicket, props.Tickets)} name='pencil-square'/></td>
          </tr>
        </tbody>
      </table>
    );
}

export default RowTicket;
