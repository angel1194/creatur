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


class RowTicket extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <tbody>
          <tr>
            <td className='bodyRow'>{this.props.date}</td>
            <td className='bodyRow'>{this.props.id}</td>
            <td className='bodyRow'>{this.props.price}</td>
            <td className='bodyRow'>{this.props.section}</td>
            <td className='bodyRow'><span className='fa-trash'></span></td>
            <td className='bodyRow'><span className='fa-pencil-square'></span></td>
            <td className='bodyRow'><span className='fa-plus-square-o'></span></td>
          </tr>
        </tbody>
      </Container>
    );
  }
}

RowTicket.propTypes = {

};

export default RowTicket;
