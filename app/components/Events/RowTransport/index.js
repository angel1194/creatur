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

class RowTransport extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <tbody>
          <tr>
            <td className='bodyRow'><img src={this.props.image} alt="imagen de transporte" width='100'/> </td>
            <td className='bodyRow'>{this.props.price}</td>
            <td className='bodyRow'>{this.props.seating}</td>
            <td className='bodyRow'> {this.props.type}</td>
            <td className='bodyRow'><span className='fa-trash'></span></td>
            <td className='bodyRow'><span className='fa-pencil-square'></span></td>
            <td className='bodyRow'><span className='fa-plus-square-o'></span></td>
          </tr>
        </tbody>
       </Container>
    );
  }
}


RowTransport.propTypes = {

};

export default RowTransport;
