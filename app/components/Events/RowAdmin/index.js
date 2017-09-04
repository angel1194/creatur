/**
*
* RowAdmin
*
*/

import React from 'react';
// import styled from 'styled-components';


class RowAdmin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <tbody>
        <tr>
          <td>{this.props.name}</td>
          <td className='row'>{this.props.address}</td>
          <td><img src={this.props.image} alt="imagen" width='100'/></td>
          <td> {this.props.stars}</td>
          <td> {this.props.description}</td>
          <td>{this.props.cancellation}</td>
          <td><span className='fa-trash'></span></td>
          <td><span className='fa-pencil-square'></span></td>
          <td><span className='fa-plus-square-o '></span></td>
        </tr>
      </tbody>

    );
  }
}

RowAdmin.propTypes = {

};

export default RowAdmin;
