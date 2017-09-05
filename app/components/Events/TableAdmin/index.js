/**
*
* TableAdmin
*
*/

import React from 'react';
import styled from 'styled-components';
import IconLabel from '../IconLabel';
import RowAdmin from '../RowAdmin';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;

`;

class TableAdmin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <Container>
      <table>
        <thead>
          <tr className='thTable'>
            <th className='thTable'>Nombre</th>
            <th className='thTable'>Dirección</th>
            <th className='thTable'>Imagen</th>
            <th className='thTable'>Estrella</th>
            <th className='thTable'>Descripción</th>
            <th className='thTable'>Cancelación</th>
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

TableAdmin.propTypes = {

};

export default TableAdmin;
