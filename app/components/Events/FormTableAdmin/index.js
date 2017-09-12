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
            <tr className='thtableAdmin'>
              <th className='thtableAdmin'>{this.props.row}</th>
              <th className='thtableAdmin'>{this.props.rowtwo}</th>
              <th className='thtableAdmin'>{this.props.rowthree}</th>
              <th className='thtableAdmin'>{this.props.rowfour}</th>
              <th className='thtableAdmin'>Eliminar</th>
              <th className='thtableAdmin'>Editar</th>
              <th className='thtableAdmin'>Agregar</th>
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
