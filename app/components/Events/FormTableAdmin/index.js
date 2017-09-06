/**
*
* FormTableAdmin
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
class FormTableAdmin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th className='thTable'>{this.props.row}</th>
              <th className='thTable'>{this.props.rowtwo}</th>
              <th className='thTable'>{this.props.rowthree}</th>
              <th className='thTable'>{this.props.rowfour}</th>
              <th className='thTable'>Eliminar</th>
              <th className='thTable'>Editar</th>
              <th className='thTable'>Agregar</th>
            </tr>
          </thead>
        </table>
      </Container>
    );
  }
}

FormTableAdmin.propTypes = {

};

export default FormTableAdmin;
