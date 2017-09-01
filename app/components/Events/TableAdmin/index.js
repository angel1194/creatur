/**
*
* TableAdmin
*
*/

import React from 'react';
import styled from 'styled-components';
import IconLabel from '../IconLabel';

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
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Imagen</th>
            <th>Estrella</th>
            <th>Descripción</th>
            <th>Cancelación</th>
            <th>Eliminar</th>
            <th>Editar</th>
            <th>Agregar</th>
          </tr>
        </thead>
         <tbody>
           <tr>
             <td>Juan </td>
             <td>Tabasco 2000</td>
             <td>imagen</td>
             <td> 5</td>
             <td> Descripción</td>
             <td>Cancelación</td>
             <td><span className='fa-trash'></span></td>
             <td><span className='fa-pencil-square'></span></td>
             <td><span className='fa-plus-square-o '></span></td>
           </tr>
         </tbody>


      </table>
    </Container>
    );
  }
}

TableAdmin.propTypes = {

};

export default TableAdmin;
