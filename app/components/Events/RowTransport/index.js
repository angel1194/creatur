/**
*
* RowTable
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

function RowTransport (props) { // eslint-disable-line react/prefer-stateless-function
    return (
      <table>
        <tbody>
          <tr>
            <td><img src={props.Transport.image} alt="imagen de transporte" width='100'/> </td>
            <td>{props.Transport.price}</td>
            <td>{props.Transport.seating}</td>
            <td> {props.Transport.type}</td>
            <td><ButtonIcon onClick={()=>props.delete(props.keyTransport)}  name='trash'/></td>
            <td><ButtonIcon onClick={()=>props.update(props.keyTransport,props.Transport)} name='pencil-square'/></td>
          </tr>
        </tbody>
      </table>
    );
}


RowTransport.propTypes = {

};

export default RowTransport;
